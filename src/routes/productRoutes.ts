import express from "express"
import { add } from "../controllers/product/add";
import { deleteProduct } from "../controllers/product/delete";

const router = express.Router();


router.post('/add', add);
router.post('/delete',deleteProduct);

export default router;
