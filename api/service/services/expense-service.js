import Expense from './../models/expense.js';

export const addExpense = async (expenseData) => {
    const newExpense = new Expense(expenseData);
    return newExpense.save();
};

export const getExpenses = async (userId) => {
    return Expense.find({ userId });
};