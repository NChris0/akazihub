const JobSeeker = require("../models/JobSeeker");
const bcrypt = require("bcryptjs");

const registerJobSeeker = async (req, res) => {
  try {
   const hashedPassword = await bcrypt.hash(
  req.body.password,
  10
);

const jobSeeker = await JobSeeker.create({
  ...req.body,
  password: hashedPassword,
});

    res.status(201).json({
      success: true,
      message: "Job Seeker Registered Successfully",
      data: jobSeeker,
    });
  }
catch (error) {
  console.log("ERROR =>", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

module.exports = {
  registerJobSeeker,
};