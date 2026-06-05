import express from 'express';
import { getRandomKey } from '../services/key.service.js';

const router = express.Router();

router.get('/', getRandomKey);

export default router;
