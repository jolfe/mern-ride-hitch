import express from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import {
  getCurrentBalance,
  depositMoney,
  withdrawMoney,
  getBalanceHistory,
  getBalanceHistoryBreakdown,
} from "../controllers/balance.controller.js";
import {
  validateDepositInput,
  validateWithdrawInput,
  verifyTheUserHasEnoughMoney,
  validateBalanceHistoryBreakdownInput,
} from "../middleware/balance.middleware.js";

const balanceRouter = express.Router();

balanceRouter.get("/balance", authenticateUser, getCurrentBalance);
balanceRouter.post(
  "/balance/deposit",
  authenticateUser,
  validateDepositInput,
  depositMoney
);
balanceRouter.post(
  "/balance/withdraw",
  authenticateUser,
  validateWithdrawInput,
  verifyTheUserHasEnoughMoney,
  withdrawMoney
);
balanceRouter.get("/balance/history", authenticateUser, getBalanceHistory);
balanceRouter.post(
  "/balance/history/breakdown",
  authenticateUser,
  validateBalanceHistoryBreakdownInput,
  getBalanceHistoryBreakdown
);

export default balanceRouter;
