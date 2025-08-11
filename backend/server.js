// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import apiKeyAuth from "./middleware/apiKeyAuth.js";

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json());

// Security and CORS Middleware
app.use(helmet());
app.use(cors());

// API Key Authentication Middleware (apply to all routes)
app.use(apiKeyAuth);

// Mount routers
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
