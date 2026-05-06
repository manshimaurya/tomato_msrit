import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", userRouter);   // 🔥 changed

app.get("/", (req, res) => {
  res.send("Auth Service Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Auth Service running on port ${process.env.PORT}`);
});