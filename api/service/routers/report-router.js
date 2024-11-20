import express from 'express';
import {
    generateMonthlyReport,
    generateYearlyReport,
} from './../controllers/report-controller.js';

const router = express.Router();

// Route for monthly reports
router.get('/monthly', generateMonthlyReport);

// Route for yearly reports
router.get('/yearly', generateYearlyReport);

export default router;
