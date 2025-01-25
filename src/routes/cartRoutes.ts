import express from "express"
import { add } from "../controllers/cart/add";
import { remove } from "../controllers/cart/remove";
import { get } from "../controllers/cart/get";
import { auth } from "../controllers/middleware/auth";
import { update } from "../controllers/cart/update";

const route = express.Router();

route.post("/add", auth, add);
route.post("/remove", auth, remove);
route.get("/get", auth, get)
route.post("/update",auth, update)

export default route;