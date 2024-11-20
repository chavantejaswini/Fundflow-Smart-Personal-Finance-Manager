import express from 'express';
import { createBudget, listBudgets } from '../controllers/budget-controller.js';

const router = express.Router();

router.post('/', createBudget);
router.get('/', listBudgets);

export default router;