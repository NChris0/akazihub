const express = require("express");
const router = express.Router();

const {
  registerEmployer,
  getAllEmployers,
  deleteEmployer,
} = require("../controllers/employerController");

router.post("/register", registerEmployer);
router.get("/", getAllEmployers);
router.delete("/:id", deleteEmployer);

module.exports = router;