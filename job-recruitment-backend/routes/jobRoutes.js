const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getEmployerJobs,
  deleteJob,
} = require("../controllers/jobController");

router.post("/create", createJob);
router.get("/", getAllJobs);

router.get(
  "/employer/:employerId",
  getEmployerJobs
);

router.delete("/:id", deleteJob);

module.exports = router;