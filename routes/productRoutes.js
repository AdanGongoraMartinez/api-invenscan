import express from 'express';
import { getAllProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id_producto', getProductById);
router.get('/delete/:id_producto', deleteProduct);
router.get('/update/:id_producto', updateProduct);
router.post('/', createProduct);

export default router;

