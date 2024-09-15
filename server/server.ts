require("dotenv").config();

import { app } from "./app";
import redisClient from "./utils/redis";
import connectDB from "./utils/db";

// Create Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  connectDB();
});
