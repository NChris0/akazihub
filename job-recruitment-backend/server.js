const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const jobSeekerRoutes = require("./routes/jobSeekerRoutes");
const employerRoutes = require("./routes/employerRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/jobseekers", jobSeekerRoutes);
app.use("/api/employers", employerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Recruitment API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});