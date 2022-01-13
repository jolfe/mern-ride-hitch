import { generateToken } from "../security/jwt.js";
import { getUserByEmail } from "../services/user.service.js";
import { checkIfPasswordIsValid } from "../services/auth.service.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  const isValidPassword = await checkIfPasswordIsValid(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Wrong email or password. Please try again",
    });
  }

  const token = generateToken({ id: user._id.toString() });
  return res.json({ user, token });
};
