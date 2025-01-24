import express from "express"
import { add } from "../controllers/product/add";
import { remove } from "../controllers/product/delete";
import { update } from "../controllers/product/update";
import { get } from "../controllers/product/get";

const router = express.Router();


router.post('/add', add);
router.post('/remove', remove);
router.post('/update',update);
router.get('/get', get);

export default router;
