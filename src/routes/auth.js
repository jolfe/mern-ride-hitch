import express from "express";
import { loginUser } from "../controllers/auth.controller.js";
import { validateLoginUserRequest } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", validateLoginUserRequest, loginUser);

export default authRouter;
