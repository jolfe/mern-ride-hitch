import bcrypt from "bcrypt";

export const checkIfPasswordIsValid = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch {
    return false;
  }
};
