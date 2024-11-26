import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';

import initializeRoutes from "./routers/index.js"


const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    try {
        mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("connected successfully");
    } catch (error) {
        console.log("DB not connected");
    }
    
    try{
        // app.use('/auth', authRouter);
        initializeRoutes(app);
        console.log("auth inihtialized");
    } catch (error) {
        console.log("auth not initialized");
    }
    
    // app.use('/expenses', expenseRouter);
    // app.use('/budgets', budgetRouter);
};

export default initialize;
