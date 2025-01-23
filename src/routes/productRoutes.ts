import express from "express"
import { add } from "../controllers/product/add";
import { deleteProduct } from "../controllers/product/delete";
import { update } from "../controllers/product/update";

const router = express.Router();


router.post('/add', add);
router.post('/delete',deleteProduct);
router.post('/update',update);

export default router;
