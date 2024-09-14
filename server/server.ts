import { app } from "./app";
require("dotenv").config();
import connectDB from "./utils/db";

// Create Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
