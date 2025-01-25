import {Request, Response} from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const paymentSession = async(req: Request, res: Response) => {
    
    
    try
    {
                    const session = await stripe.checkout.sessions.create({
                    
                        line_items: [
                            {
                            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                            price: 'price_1Q8l0vFIO4BK2zy8z5g6xqk3',
                            quantity: 1,
                            },
                        ],
                        mode: 'subscription',
                        success_url: 'http://localhos:3000/?success=true',
                        cancel_url: 'http://localhost:3000/?canceled=true',

                    });

                    //console.log(session);

                        res.send({url: session.url});
                    
    }catch
    {
        res.send({status: "error"});
    }


}