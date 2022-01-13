import mongoose from "mongoose";
import { ATLAS_URI } from "./config.js";

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});