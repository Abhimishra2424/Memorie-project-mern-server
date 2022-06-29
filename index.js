import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv'
import postRoutes from "./routes/Posts.js";
import userRoutes from './routes/Users.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

// http://localhost:5000/posts
app.use("/posts", postRoutes);
// http://localhost:5000/user
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
