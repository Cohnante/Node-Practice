import { Router } from "express";
const router = Router();

import * as productsCtrl from '../controllers/products.controller'

router.get('/',productsCtrl.getProduct);
router.get('/:_id',productsCtrl.getProductByID);
router.post('/',productsCtrl.createProduct);
router.put('/:_id',productsCtrl.updateProductByID);
router.delete('/:_id',productsCtrl.deleteProductByID);

export default router;