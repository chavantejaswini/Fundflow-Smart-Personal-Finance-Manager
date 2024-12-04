import React from 'react';
import ExpenseTracker from '../components/Dashboard/ExpenseTracker';
import BudgetManager from '../components/Dashboard/BudgetManager';
import Reports from '../components/Dashboard/Reports';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseTracker />
      <BudgetManager />
      <Reports />
    </div>
  );
};

export default DashboardPage;
