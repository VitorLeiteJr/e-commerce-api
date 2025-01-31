
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { Request, Response } from "express";


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.END_POINT_SECRET as string;

export const  webhook =  async(req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;


  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      endpointSecret
    );

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent was successful");
        break;
      case "payment_intent.payment_failed":
        console.log("Payment failed");
        break;
      // Add more event types as needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).send("Webhook received");
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};