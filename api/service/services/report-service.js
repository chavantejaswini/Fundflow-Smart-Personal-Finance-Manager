import Expense from './../models/expense.js';

export const getMonthlyReport = async (userId, month, year) => {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    // Aggregate expenses for the given month
    const expenses = await Expense.aggregate([
        { $match: { userId: userId, date: { $gte: startDate, $lte: endDate } } },
        {
            $group: {
                _id: '$category',
                totalAmount: { $sum: '$amount' },
            },
        },
    ]);

    const totalSpent = expenses.reduce((sum, expense) => sum + expense.totalAmount, 0);

    return {
        startDate,
        endDate,
        expensesByCategory: expenses,
        totalSpent,
    };
};

export const getYearlyReport = async (userId, year) => {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    // Aggregate expenses for the given year
    const expenses = await Expense.aggregate([
        { $match: { userId: userId, date: { $gte: startDate, $lte: endDate } } },
        {
            $group: {
                _id: { month: { $month: '$date' } },
                totalAmount: { $sum: '$amount' },
            },
        },
    ]);

    const monthlyBreakdown = expenses.map((e) => ({
        month: e._id.month,
        totalAmount: e.totalAmount,
    }));

    const totalSpent = monthlyBreakdown.reduce((sum, entry) => sum + entry.totalAmount, 0);

    return {
        year,
        monthlyBreakdown,
        totalSpent,
    };
};
