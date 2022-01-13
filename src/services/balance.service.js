import Dinero from "dinero.js";
import User from "../models/User.model.js";
import mongoose from "mongoose";

export const formatMoney = (amount) => {
  return Dinero({ amount }).toFormat("$0,0.00");
};

export const withdrawMoneyFromUserBalance = async (user, amount, type) => {
  user.balance = user.balance - amount;

  user.transactions.push({
    amount: -amount,
    timestamp: new Date(),
    type: "withdrawal",
  });
  await user.save();
  return user;
};

export const depositMoneytoUserBalance = async (user, amount, type) => {
  user.balance = user.balance + amount;
  user.transactions.push({
    amount,
    timestamp: new Date(),
    type: "deposit",
  });
  await user.save();
  return user;
};

export const getUserBalanceHistory = (user, amount) => {
  const transactions = [...user.transactions];
  return transactions
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map(({ amount, timestamp }) => {
      return {
        amount: formatMoney(amount),
        type: amount < 0 ? "Withdrawal" : "Deposit",
        date: new Date(timestamp).toLocaleDateString("en-US"),
      };
    });
};

/**
 * Options are:
 *
 * type: 'withdrawal' or 'deposit' or undefined
 * start_at: Date
 * end_at: Date
 * step: 'days' or 'weeks' or 'months'
 * $gte:ISODate(“2020-03-01”),$lt:ISODate(“2021-03-31”)
 */
export const getUserBalanceHistoryBreakdown = async (user, options) => {
  const { start_at, end_at, type, step } = options;
  console.log(user);

  const uuid = await User.aggregate([
    { $unwind: "$transactions" },
    {
      $match: {
        "transactions.type": type,
        "transactions.timestamp": {
          $gte: new Date(start_at),
          $lt: new Date(end_at),
        },
      },
    },
  ]);
  return uuid;
};
