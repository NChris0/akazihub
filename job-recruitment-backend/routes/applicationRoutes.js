
const express = require("express");
const router = express.Router();

const {
  applyJob,
  getMyApplications,
  getApplicantsByJob,
  updateApplicationStatus,
  getAllApplications,
} = require("../controllers/applicationController");

router.post("/apply", applyJob);

router.get(
  "/user/:userId",
  getMyApplications
);

router.get(
  "/job/:jobId",
  getApplicantsByJob
);

router.put(
  "/:applicationId",
  updateApplicationStatus
);

router.get("/", getAllApplications);

module.exports = router;