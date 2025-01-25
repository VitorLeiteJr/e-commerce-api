import express from "express"
import { add } from "../controllers/cart/add";
import { remove } from "../controllers/cart/remove";
import { auth } from "../controllers/middleware/auth";

const route = express.Router();

route.post("/add", auth, add);
route.post("/remove", auth, remove);

export default route;