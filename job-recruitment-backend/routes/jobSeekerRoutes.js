const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  registerJobSeeker,
  getProfile,
  updateProfile,
  uploadCV,
  getAllJobSeekers,
} = require("../controllers/jobSeekerController");

router.post("/register", registerJobSeeker);
router.get("/", getAllJobSeekers);

router.get(
  "/profile/:id",
  getProfile
);

router.put(
  "/profile/:id",
  updateProfile
);

router.put(
  "/upload-cv/:id",
  upload.single("cv"),
  uploadCV
);

module.exports = router;