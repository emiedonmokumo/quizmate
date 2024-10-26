import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next(); // If the password is not modified, proceed to the next middleware
  }

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    user.password = await bcrypt.hash(user.password, salt); // Hash the password with the salt
    next(); // Proceed to save the user
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Check if the model is already defined, if so, use the existing model
const User = models.User || model('User', userSchema);

export default User;
