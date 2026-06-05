import express from 'express';
import { authenticateKey } from '../middlewares/authenticateKey.js';
import {
	getAllCarts,
	getCartById,
	updateCart,
} from '../services/cart.service.js';

const router = express.Router();

router.get('/', authenticateKey, getAllCarts);
router.get('/:cartId', authenticateKey, getCartById);
router.patch('/', authenticateKey, updateCart);

export default router;
