import { isInteger, isDate } from "../helpers/validation.js";

export const validateDepositInput = (req, res, next) => {
  const { amount } = req.body;
  if (!isInteger(amount)) {
    return res.status(400).json({ message: "Invalid input parameters." });
  }
  next();
};

export const validateWithdrawInput = (req, res, next) => {
  const { amount } = req.body;
  if (!isInteger(amount)) {
    return res.status(400).json({ message: "Invalid input parameters." });
  }
  next();
};

export const verifyTheUserHasEnoughMoney = (req, res, next) => {
  const { amount } = req.body;
  const { user } = req;
  if (amount > user.balance) {
    return res.status(400).json({
      message:
        "The amount you're trying to withdraw is greater than your total balance.",
    });
  }
  next();
};

export const validateBalanceHistoryBreakdownInput = (req, res, next) => {
  const { start_at, end_at, type, step } = req.body;
  if (
    !isDate(start_at) ||
    !isDate(end_at) ||
    (type !== "withdrawal" &&
      type !== "deposit" &&
      typeof type !== "undefined") ||
    (step !== "months" && step !== "days" && step !== "weeks")
  ) {
    return res.status(400).json({ message: "Invalid query" });
  }
  next();
};
