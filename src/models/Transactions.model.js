import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  start_at: {
    type: Date,
    required: true,
  },
  end_at: {
    type: Date,
    required: true,
  },
  step: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Transaction", transactionSchema);
