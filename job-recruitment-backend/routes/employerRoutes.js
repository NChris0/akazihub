const express = require("express");
const router = express.Router();

const {
  registerEmployer,
} = require("../controllers/employerController");

router.post("/register", registerEmployer);

module.exports = router;