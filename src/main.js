import express from "express";

import { PORT } from "./config/config.js";
import "./config/database.js";
import setup from "./config/setup.js";

const application = express();

setup(application);

application.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
