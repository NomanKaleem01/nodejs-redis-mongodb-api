require('dotenv').config();
const express = require("express");
const mongoose = require("./config/connection");
const { userfunction, getuserfunction } = require("./controllers/user");

const app = express();
app.use(express.json());

// Routes
app.post("/users", userfunction);
app.get("/users/:id", getuserfunction);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
