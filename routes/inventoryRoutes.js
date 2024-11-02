import express from 'express';
import { getAllItems, getItemById, deleteItem, updateItem, createItem } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id_inventario', getItemById);
router.get('/delete/:id_inventario', deleteItem);
router.get('/update/:id_inventario', updateItem);
router.post('/', createItem);

export default router;

