import express from 'express';
import authController from '../controllers/auth-controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = express.Router();

// Define routes for authentication
// User registration route
router.route('/register').post(asyncHandler(authController.register));

// User login route
router.route('/login').post(asyncHandler(authController.login));
// router.post('/login', authController.login);

// Forgot password route
// router.post('/forgot-password', authController.forgotPassword);

// Reset password route
// router.put('/reset-password', authController.resetPassword);

// Delete a user route
// router.delete('/users/:userId', authController.deleteUser);

console.log("Authentication routes successfully set up.");

export default router;
