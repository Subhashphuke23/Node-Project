import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, default: 25 },
  gender: { type: String },
});

const User = mongoose.model('User', userSchema);

export { User };
