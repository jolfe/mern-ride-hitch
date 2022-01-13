import { createUser as createUserService } from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
  res.json({
    user: req.user,
  });
};

export const createUser = async (req, res) => {
  const user = await createUserService(req.body);
  res.json({
    user,
  });
};
