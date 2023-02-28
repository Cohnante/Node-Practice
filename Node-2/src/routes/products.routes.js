import { Router } from "express";
const router = Router();

import * as productsCtrl from '../controllers/products.controller'
import  { verifyToken,IsModerator,IsAdmin } from "../middlewares";

router.get('/',productsCtrl.getProduct);
router.get('/:_id',productsCtrl.getProductByID);
router.post('/',verifyToken,IsModerator,IsAdmin,productsCtrl.createProduct);
router.put('/:_id',verifyToken,IsModerator,IsAdmin,productsCtrl.updateProductByID);
router.delete('/:_id',verifyToken,IsModerator,IsAdmin,productsCtrl.deleteProductByID);

export default router;