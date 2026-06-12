const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getEmployerJobs,
  deleteJob,
  updateJob,
  getJobById,
} = require("../controllers/jobController");

router.post("/create", createJob);
router.get("/", getAllJobs);

router.get(
  "/employer/:employerId",
  getEmployerJobs
);

router.get("/:id", getJobById);


router.put(
  "/:id",
  updateJob
);

router.delete("/:id", deleteJob);



module.exports = router;