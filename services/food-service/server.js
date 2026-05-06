import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

connectDB();

app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("Food Service Running");
});

app.listen(process.env.PORT, () => {
  console.log("Food Service running on port", process.env.PORT);
});