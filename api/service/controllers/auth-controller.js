import authService from '../services/auth-service.js';

console.log("inside auth-controller");

// Register a user
const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await authService.register(firstName, lastName, email, password);
        res.status(201).json(user); // 201 Created
    } catch (error) {
        res.status(400).json({ message: error.message }); // 400 Bad Request
    }
};

// Log in a user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.login(email, password);
        res.status(200).json(user); // 200 OK
    } catch (error) {
        res.status(401).json({ message: error.message }); // 401 Unauthorized
    }
};

// Forgot password
// const forgotpassword = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const token = await authService.forgotpassword(email);
//         console.log(token);
//         res.status(200).json({ message: "Reset token sent to email" }); // 200 OK
//     } catch (error) {
//         res.status(400).json({ message: error.message }); // 400 Bad Request
//     }
// };

// // Reset password
// const resetpassword = async (req, res) => {
//     try {
//         const { email, password, token } = req.body;
//         const user = await authService.resetpassword(email, password, token);
//         res.status(200).json(user); // 200 OK
//     } catch (error) {
//         res.status(400).json({ message: error.message }); // 400 Bad Request
//     }
// };

// // Delete a user
// const deleteUser = async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const response = await authService.deleteUser(userId);
//         res.status(200).json({ message: "User deleted successfully", response }); // 200 OK
//     } catch (error) {
//         res.status(404).json({ message: "User not found", error: error.message }); // 404 Not Found
//     }
// };

export default { register, login };
