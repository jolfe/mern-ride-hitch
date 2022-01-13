import {
  formatMoney,
  withdrawMoneyFromUserBalance,
  depositMoneytoUserBalance,
  getUserBalanceHistory,
  getUserBalanceHistoryBreakdown,
} from "../services/balance.service.js";

export const getCurrentBalance = (req, res) => {
  const { balance } = req.user;
  res.json({
    balance: formatMoney(balance),
  });
};

export const depositMoney = async (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  const { balance } = await depositMoneytoUserBalance(user, amount);
  res.json({ balance: formatMoney(balance) });
};

export const withdrawMoney = async (req, res) => {
  const { amount, type } = req.body;
  const { user } = req;
  const { balance } = await withdrawMoneyFromUserBalance(user, amount, type);
  res.json({ balance: formatMoney(balance) });
};

export const getBalanceHistory = async (req, res) => {
  const { user } = req;
  const balance = getUserBalanceHistory(user);
  res.json(balance);
};

export const getBalanceHistoryBreakdown = async (req, res) => {
  const { start_at, end_at, type, step } = req.body;
  const { user } = req;
  const breakdown = await getUserBalanceHistoryBreakdown(user, {
    start_at,
    end_at,
    type,
    step,
  });
  res.json(breakdown);
};
