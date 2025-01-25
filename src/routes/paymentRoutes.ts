import express from "express"
import { auth } from "../controllers/middleware/auth";
import { paymentSession } from "../payment/stripe/session";


const router = express.Router();

router.get("/session", auth,paymentSession);

export default router;