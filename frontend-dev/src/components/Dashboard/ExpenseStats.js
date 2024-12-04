import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ExpenseStats = ({ data }) => {
  return (
    <div>
      <h2>Expense Stats</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseStats;
