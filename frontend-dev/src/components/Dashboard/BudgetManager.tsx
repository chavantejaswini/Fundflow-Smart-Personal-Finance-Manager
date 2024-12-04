import React, { useState } from 'react';

const BudgetManager: React.FC = () => {
  const [budget, setBudget] = useState<number>(0);
  const [spent, setSpent] = useState<number>(0);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const handleSpentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpent(Number(e.target.value));
  };

  return (
    <div>
      <h2>Budget Manager</h2>
      <label>
        Monthly Budget:
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
        />
      </label>
      <label>
        Amount Spent:
        <input
          type="number"
          value={spent}
          onChange={handleSpentChange}
        />
      </label>
      <p>
        Remaining Budget: ${budget - spent >= 0 ? budget - spent : 0}
      </p>
      {spent > budget && <p style={{ color: 'red' }}>You have exceeded your budget!</p>}
    </div>
  );
};

export default BudgetManager;
