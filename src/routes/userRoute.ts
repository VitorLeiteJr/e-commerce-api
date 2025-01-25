import express from "express";
import { signup } from "../controllers/user/signup";
import { logIn } from "../controllers/user/login";
import { auth } from "../controllers/middleware/auth";

const router = express.Router();

router.post("/signup",auth, signup);
router.post("/login",auth, logIn);

export default router;