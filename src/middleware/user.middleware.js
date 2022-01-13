import { isEmail, isString, isValidPassword } from "../helpers/validation.js";

export const validateCreateUserRequest = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  if (
    !isEmail(email) ||
    !isValidPassword(password) ||
    !isString(firstName) ||
    !isString(lastName)
  ) {
    return res.status(400).json({
      message: "Please enter the valid email, password, first and last name",
    });
  }

  next();
};
