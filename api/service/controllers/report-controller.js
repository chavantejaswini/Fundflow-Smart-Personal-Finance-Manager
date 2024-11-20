import { getMonthlyReport, getYearlyReport } from './../services/report-service.js';
import { setSuccess, setError } from './response-handler.js';

// Generate Monthly Report
export const generateMonthlyReport = async (req, res) => {
    try {
        const { userId } = req.user; // Assuming user authentication provides user ID
        const { month, year } = req.query; // Query parameters for month and year
        const report = await getMonthlyReport(userId, month, year);
        setSuccess(report, res);
    } catch (error) {
        setError(error, res);
    }
};

// Generate Yearly Report
export const generateYearlyReport = async (req, res) => {
    try {
        const { userId } = req.user; // Assuming user authentication provides user ID
        const { year } = req.query; // Query parameter for the year
        const report = await getYearlyReport(userId, year);
        setSuccess(report, res);
    } catch (error) {
        setError(error, res);
    }
};
