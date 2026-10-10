const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      expenseType: req.body.expenseType,
      amount: req.body.amount,
      comment: req.body.comment,
      userId: req.user.userId,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      userId: req.user.userId,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses
};