import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001

connectDB(); // connect to db

// middlewares
app.use(cors({origin: process.env.CORS_ORIGIN || 'http://localhost:5173',}));
app.use(express.json()); // to parse json data

// routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
console.log("Server is running on port", PORT)
});