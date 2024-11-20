import { addExpense, getExpenses } from './../services/expense-service.js';
import { setSuccess, setError } from './response-handler.js';

export const createExpense = async (req, res) => {
    try {
        const expense = await addExpense(req.body);
        setSuccess(expense, res);
    } catch (error) {
        setError(error, res);
    }
};

export const listExpenses = async (req, res) => {
    try {
        const expenses = await getExpenses(req.user.id);  // Assuming user ID comes from middleware
        setSuccess(expenses, res);
    } catch (error) {
        setError(error, res);
    }
};