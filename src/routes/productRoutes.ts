import express from "express"
import { add } from "../controllers/product/add";
import { remove } from "../controllers/product/delete";
import { update } from "../controllers/product/update";
import { get } from "../controllers/product/get";
import { auth } from "../controllers/middleware/auth";

const router = express.Router();


router.post('/add', auth, add);
router.post('/remove',auth, remove);
router.post('/update',auth, update);
router.get('/get',auth, get);

export default router;
