const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    expenseType: {
      type: String,
      required: true,
      enum: ["Daily", "Medical", "Emergency"],
    },
    amount: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);