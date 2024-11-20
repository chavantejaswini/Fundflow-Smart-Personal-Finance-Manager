import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new User({ ...userData, password: hashedPassword });
    return newUser.save();
};

// Log in an existing user
export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    } else {
        throw new Error('Invalid credentials');
    }
};

// Delete a user
export const deleteUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return { message: 'User deleted successfully' };
};