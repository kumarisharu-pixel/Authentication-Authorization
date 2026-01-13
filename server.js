require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

console.log("Root route registered");
app.get("/", (req, res) => {
  res.send("JWT Auth API is running");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
