import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  transactions: {
    type: Array,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", userSchema);
