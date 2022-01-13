import bcrypt from "bcrypt";
import { verifyToken } from "../security/jwt.js";
import { getUserById } from "../services/user.service.js";
import { isEmail, isString } from "../helpers/validation.js";

export const validateLoginUserRequest = (req, res, next) => {
  const { email, password } = req.body;
  if (!isEmail(email) || !isString(password)) {
    return res.status(400).json({
      message: "Please enter the email and password",
    });
  }

  next();
};

export const authenticateUser = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader) {
    return res.status(401).json({
      message: "You are not authenticated user. Please log in.",
    });
  }

  try {
    const token = authorizationHeader.replace("Bearer ", "");
    req.tokenPayload = verifyToken(token);

    const user = await getUserById(req.tokenPayload.id);

    if (!user) throw new Error("No user with that ID");

    req.user = user;
    next();
  } catch {
    return res.status(401).json({
      message: "You are not authenticated user. Please log in.",
    });
  }
};

export const hashPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        message: "We have run into an issue. Please try again.",
      });
    }

    req.body.password = hash;

    next();
  });
};
