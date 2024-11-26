import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    twoFactorEnabled: { type: Boolean, default: false },
    resetToken: {
      token: { type: String },
      expires: { type: Date },
    },
  },
  { timestamps: true }
);

// Encrypt password before saving user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate access token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Generate reset password token
userSchema.methods.generateResetPasswordToken = async function () {
  const resetToken = Math.floor(100000 + Math.random() * 900000); // 6-digit code
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes
  this.resetToken = { token: resetToken, expires };
  await this.save();
  return resetToken;
};

export default mongoose.model("User", userSchema);
