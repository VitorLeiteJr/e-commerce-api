import express from "express"
import { webhook } from "./stripe";

const router = express.Router();

router.use(express.raw({ type: "application/json" }));
router.post("/", webhook );

export default router;