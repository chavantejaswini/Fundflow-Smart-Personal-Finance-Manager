import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import expenseService from '../../services/expenseService';
import { Expense } from '../../models/Expense';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await expenseService.getExpenses();
        setExpenses(response.data);

        // Group expenses by category for the chart
        const categoryTotals: { [key: string]: number } = {};
        response.data.forEach((expense: Expense) => {
          if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] += expense.amount;
          } else {
            categoryTotals[expense.category] = expense.amount;
          }
        });

        // Prepare data for the chart
        setChartData({
          labels: Object.keys(categoryTotals),
          datasets: [
            {
              label: 'Total Spent ($)',
              data: Object.values(categoryTotals),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        alert('Failed to fetch expenses');
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Monthly Expense Reports</h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Expenses by Category',
              },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default Reports;
