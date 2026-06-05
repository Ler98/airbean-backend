import express from 'express';
import { getMenu } from '../services/menu.service.js';
import { authenticateKey } from '../middlewares/authenticateKey.js';

const router = express.Router();

router.get('/', authenticateKey, getMenu);

export default router;
