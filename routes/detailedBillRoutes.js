import express from 'express';
import { getAllDetailedBills, getDetailedBillById, deleteDetailedBill, updateDetailedBill, createDetailedBill } from '../controllers/detailedBillController.js';

const router = express.Router();

router.get('/', getAllDetailedBills);
router.get('/:id_detalle', getDetailedBillById);
router.get('/delete/:id_detalle', deleteDetailedBill);
router.post('/update/', updateDetailedBill);
router.post('/', createDetailedBill);

export default router;

