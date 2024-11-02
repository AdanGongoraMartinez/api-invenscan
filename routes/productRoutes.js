import express from 'express';
import { getAllProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/delete/:id', deleteProduct);
router.get('/update/:id', updateProduct);
router.post('/', createProduct);

export default router;

