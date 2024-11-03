import express from 'express';
import { getAllBills, getBillById, deleteBill, updateBill, createBill } from '../controllers/billController.js';

const router = express.Router();

router.get('/', getAllBills);
router.get('/:id_factura', getBillById);
router.get('/delete/:id_factura', deleteBill);
router.post('/update/', updateBill);
router.post('/', createBill);

export default router;

