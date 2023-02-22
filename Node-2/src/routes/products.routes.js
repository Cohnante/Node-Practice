import { Router } from "express";
const router = Router();

import * as productsCtrl from '../controllers/products.controller'

router.get('/',productsCtrl.getProduct);
router.get('/:id',productsCtrl.getProductByID);
router.post('/',productsCtrl.createProduct);
router.put('/:id',productsCtrl.updateProductByID);
router.delete('/:id',productsCtrl.deleteProductByID);

export default router;