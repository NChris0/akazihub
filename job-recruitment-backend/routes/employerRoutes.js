const express = require("express");
const router = express.Router();

const {
  registerEmployer,
  getAllEmployers,
} = require("../controllers/employerController");

router.post("/register", registerEmployer);
router.get("/", getAllEmployers);

module.exports = router;