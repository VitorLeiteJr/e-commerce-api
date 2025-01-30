
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { Request, Response } from "express";


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_b464529fdf04af250f80d3d27c73f25808b1a1b5d03beb8fabd17da72397e5a8";

export const  webhook =  async(req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];


  try {
   const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
} catch (err) {
    res.send(err);
    return;
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
}