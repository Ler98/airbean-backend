import express from 'express';
import { addNewUser, loginUser } from '../services/users.service.js';
import { authenticateKey } from '../middlewares/authenticateKey.js';

const router = express.Router();

router.post('/register', authenticateKey, addNewUser);
router.post('/login', authenticateKey, loginUser);

export default router;
