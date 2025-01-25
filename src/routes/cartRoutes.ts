import express from "express"
import { add } from "../controllers/cart/add";
import { remove } from "../controllers/cart/remove";

const route = express.Router();

route.post("/add",add);
route.post("/remove",remove);

export default route;