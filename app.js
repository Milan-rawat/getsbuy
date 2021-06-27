const express = require("express");

// Start express app
const app = express();

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.use("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Hello Wolrd!",
  });
});

module.exports = app;
