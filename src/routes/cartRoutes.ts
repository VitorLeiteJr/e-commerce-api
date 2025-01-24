import express from "express"
import { add } from "../controllers/cart/add";

const route = express.Router();

route.post("/add",add);

export default route;