import express from "express";
import { signup } from "../controllers/user/signup";
import { logIn } from "../controllers/user/login";
import { auth } from "../controllers/middleware/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", logIn);

export default router;