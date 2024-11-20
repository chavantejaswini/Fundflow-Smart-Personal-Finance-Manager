import express from 'express';
import { createExpense, listExpenses } from './../controllers/expense-controller.js';

const router = express.Router();

router.post('/', createExpense);
router.get('/', listExpenses);

export default router;