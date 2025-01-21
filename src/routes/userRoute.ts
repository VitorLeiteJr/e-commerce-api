import express from "express";
import { signup } from "../controllers/userController";

const router = express.Router();

router.post("/newuser", signup);

export default router;