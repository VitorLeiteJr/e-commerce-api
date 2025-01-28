import express from "express";
import { signup } from "../controllers/user/signup";
import { logIn } from "../controllers/user/login";
import { auth } from "../controllers/middleware/auth";
import { get } from "../controllers/user/get";
import { update } from "../controllers/user/update";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", logIn);
router.get("/get", auth,get);
router.post("/update",auth,update)

export default router;