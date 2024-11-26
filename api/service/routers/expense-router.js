import { Router } from "express";
import * as ExpenseController from "../controllers/expense-controller.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();

// Route to list all expenses for a specific user and create a new expense
router
  .route('/')
  .post(asyncHandler(ExpenseController.createExpense)); // Create expense

// Route to update, get, or delete a specific expense for a specific user
router
  .route("/:id/update")
  // .get(asyncHandler(ExpenseController.get_Expenses))
  .put(asyncHandler(ExpenseController.updateExpense)) // Update expense
  
router
  .route("/:id/delete")
  .delete(asyncHandler(ExpenseController.deleteExpense))


export default router;
