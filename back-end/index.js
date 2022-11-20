import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import projectRoutes from "./routes/project.js";
import taskRoutes from "./routes/task.js";


//CREATE EXPRESS APP

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/project",projectRoutes);
app.use("/api/task",taskRoutes);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});