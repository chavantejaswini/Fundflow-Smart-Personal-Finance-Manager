import express from 'express';
import { register, login, deleteUser, resetPassword } from '../controllers/auth-controller.js';

const router = express.Router();

// User routes
router.post('/register', register);
router.post('/login', login);
router.delete('/:userId', deleteUser); // Delete user route
router.put('/:userId/reset-password', resetPassword); // Reset password route

export default router;
