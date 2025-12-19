require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Start server only after DB connects
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }

  console.log("Database connected successfully.");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
