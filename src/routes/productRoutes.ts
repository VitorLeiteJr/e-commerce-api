import express from "express"
import { add } from "../controllers/product/add";

const router = express.Router();


router.post('/add', add);

export default router;
