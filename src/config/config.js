import "./loadenv.js";

export const PORT = process.env.PORT || 3333;
export const ATLAS_URI = process.env.ATLAS_URI;
export const JWT_SECRET = process.env.JWT_SECRET || 'change_me';
