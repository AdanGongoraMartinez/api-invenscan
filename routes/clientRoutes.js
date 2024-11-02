import express from 'express';
import { getAllClients, getClientById, deleteClient, updateClient, createClient } from '../controllers/clientController.js';

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id_cliente', getClientById);
router.get('/delete/:id_cliente', deleteClient);
router.get('/update/:id_cliente', updateClient);
router.post('/', createClient);

export default router;

