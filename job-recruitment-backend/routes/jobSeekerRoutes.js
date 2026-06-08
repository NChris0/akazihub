const express = require("express");
const router = express.Router();

const {
  registerJobSeeker,
} = require("../controllers/jobSeekerController");

router.post("/register", registerJobSeeker);

module.exports = router;