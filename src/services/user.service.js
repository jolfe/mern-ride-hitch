import UserModel from "../models/User.model.js";

export const getUserById = async (id) => {
  const user = await UserModel.findById(id);
  return user;
};

export const getUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return user;
};

export const createUser = async (data) => {
  const user = await UserModel.create(data);
  return user;
};
