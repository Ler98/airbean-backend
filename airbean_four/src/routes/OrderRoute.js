import express from 'express';
import { authenticateKey } from '../middlewares/authenticateKey.js';
import {
	getOrders,
	getOrdersByUserId,
	createOrder,
} from '../services/order.service.js';

const router = express.Router();

router.get('/', authenticateKey, getOrders);
router.get('/:userId', authenticateKey, getOrdersByUserId);
router.post('/', authenticateKey, createOrder);

export default router;
