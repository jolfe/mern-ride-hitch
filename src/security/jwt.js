import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const verifyToken = (token) => jwt.verify(token, JWT_SECRET);
export const generateToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
