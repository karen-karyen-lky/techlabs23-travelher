import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import categoryRoutes from "./routes/categories.js";
import multer from "multer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
//const dotenv = require("dotenv"); ####ersetzt durch import function#####
//const mongoose = require("mongoose"); ####ersetzt durch import function##### 
//const authRoutes = require("./routes/auth.js");

dotenv.config();

app.use(express.json());
// das muss überprüft werden:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Conneted to MongoDB"))
  .catch((err)=> console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(8800, () => {
  console.log("Backend is running!");
});
