import { addBudget, getBudgets } from '../services/budget-service.js';
import { setSuccess, setError } from './response-handler.js';

export const createBudget = async (req, res) => {
    try {
        const budget = await addBudget(req.body);
        setSuccess(budget, res);
    } catch (error) {
        setError(error, res);
    }
};

export const listBudgets = async (req, res) => {
    try {
        const budgets = await getBudgets(req.user.id);
        setSuccess(budgets, res);
    } catch (error) {
        setError(error, res);
    }
};