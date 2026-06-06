const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Job Recruitment API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});