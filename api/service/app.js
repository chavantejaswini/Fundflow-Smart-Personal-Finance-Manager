import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';

import authRouter from './routers/auth-router.js';
import expenseRouter from './routers/expense-router.js';
import budgetRouter from './routers/budget-router.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
    
    app.use('/auth', authRouter);
    app.use('/expenses', expenseRouter);
    app.use('/budgets', budgetRouter);
};

export default initialize;
