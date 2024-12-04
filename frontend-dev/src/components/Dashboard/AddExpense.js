import React, { useState } from "react";
import axios from "axios";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/expenses",
        { amount, category },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Expense added successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleAddExpense}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
