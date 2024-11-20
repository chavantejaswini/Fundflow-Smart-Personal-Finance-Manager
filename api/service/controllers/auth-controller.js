import { registerUser, loginUser, deleteUser, resetPassword } from '../services/auth-service.js';
import { setSuccess, setError } from './response-handler.js';

// Register a user
export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        setSuccess(user, res);
    } catch (error) {
        setError(error, res);
    }
};

// Log in a user
export const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        setSuccess({ token }, res);
    } catch (error) {
        setError(error, res);
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const response = await deleteUser(req.params.userId);
        setSuccess(response, res);
    } catch (error) {
        setError(error, res);
    }
};

// Reset a user's password
export const resetPassword = async (req, res) => {
    try {
        const response = await resetPassword(req.params.userId, req.body.newPassword);
        setSuccess(response, res);
    } catch (error) {
        setError(error, res);
    }
};
