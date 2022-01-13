import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";
import {
  hashPassword,
  authenticateUser,
} from "../middleware/auth.middleware.js";
import { validateCreateUserRequest } from "../middleware/user.middleware.js";

const userRouter = express.Router();

userRouter.post("/users", validateCreateUserRequest, hashPassword, createUser);
userRouter.get("/users", authenticateUser, getAllUsers);

export default userRouter;
