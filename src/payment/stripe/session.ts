import {Request, Response} from 'express';
import Stripe from 'stripe';
import { db } from '../../lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const paymentSession = async(req: Request, res: Response) => {
    
    const {userId}  = req.body;

    try
    {

                    const line_items = await db.cart.findMany({
                        where: {
                            userId
                        },
                        select:{
                            price: true,
                            quantity: true
                        }
                    });
                    console.log(line_items);


                    const session = await stripe.checkout.sessions.create({
                    
                        line_items: line_items,//[
                            // {
                            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                            // price: 'price_1Q8l0vFIO4BK2zy8z5g6xqk3',
                            // quantity: 1,
                            // },
                        //],
                        mode: 'payment',
                        success_url: 'http://localhos:3000/?success=true',
                        cancel_url: 'http://localhost:3000/?canceled=true',

                    });

                    //console.log(session);

                        res.send({url: session.url});
                    
    }catch(error)
    {
        res.send({status: "error"});
        console.log(error);
    }


}