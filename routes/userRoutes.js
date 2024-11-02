import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id_usuario', getUserById);

export default router;

