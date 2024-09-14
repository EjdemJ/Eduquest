require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./utils/db";

export const app = express();

// body parser
app.use(bodyParser.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  await connectDB();
  res.status(200).json({
    success: true,
    message: "API is working from root",
  });
});

// // testing api
// app.get("/test", (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     success: true,
//     message: "API is working",
//   });
// });

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     success: true,
//     message: "API is working from root",
//   });
// });

// // unknown routes
// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//   const err = new Error(`Route ${req.url} not found`) as any;
//   err.status = 404;
//   next(err);
// });
