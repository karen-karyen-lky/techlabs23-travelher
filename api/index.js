import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
//const dotenv = require("dotenv"); ####ersetzt durch import function#####
//const mongoose = require("mongoose"); ####ersetzt durch import function##### 
//const authRoutes = require("./routes/auth.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Conneted to MongoDB"))
  .catch((err)=> console.log(err));


app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Backend is running!");
});
