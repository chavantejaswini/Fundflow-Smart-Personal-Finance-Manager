import userService from '../services/user-service.js';
// import sendEmail from '../utils/sendEmail.js';
import bcrypt from 'bcrypt';
import user from '../models/user.js';

// Register a new user
const register = async (firstName, lastName, email, password) => {
  const existingUser = await userService.getUser({ email });
  if (existingUser) throw new Error('Email already registered');

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the new user
  const user = await userService.createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return { user };
};

// Log in a user
const login = async (email, password) => {
  
  const user = await userService.getUser({ email });
  if (!user) throw new Error('User not found');

  console.log("pass", password);
  console.log("passUser", user.password);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Incorrect password');

  
  const accessToken = await user.generateAccessToken();
  return { user, accessToken };
};

// Forgot password: Generate a reset token and send it via email
// const forgotpassword = async (email) => {
  
//   const user = await userService.getUser({ email });
//   if (!user) throw new Error('User not found');
//   const resetToken = await user.generateResetPasswordToken();
//   await sendEmail({
//     email: user.email,
//     subject: 'Password Reset Request',
//     message: `Your password reset token is ${resetToken}`,
//   });

//   return { resetToken };
// };

// // Reset password: Validate token and update user's password
// const resetpassword = async (email, password, token) => {
  
//   const user = await userService.getUser({ email });
//   if (!user) throw new Error('User not found');

//   if (user.resetToken.token !== token) throw new Error('Invalid token');
//   if (user.resetToken.expires < Date.now()) throw new Error('Token expired');
//   user.password = await bcrypt.hash(password, 10);
//   user.resetToken = { token: null, expires: null };
//   await user.save();

//   return { user };
// };

// // Delete a user
// const deleteUser = async (userId) => {
 
//   const user = await userService.deleteUser(userId);
//   if (!user) throw new Error('User not found');

//   return { message: 'User deleted successfully' };
// };

export default { register, login };
