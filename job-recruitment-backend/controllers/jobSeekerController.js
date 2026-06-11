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

const getProfile = async (req, res) => {
  try {
    const user = await JobSeeker.findById(
      req.params.id
    ).select("-password");

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updatedUser = await JobSeeker.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: updatedUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const uploadCV = async (req, res) => {
  try {
    console.log("FILE =>", req.file);

    const updatedUser = await JobSeeker.findByIdAndUpdate(
      req.params.id,
      {
        cv: req.file.filename,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "CV Uploaded Successfully",
      data: updatedUser,
    });

  } catch (error) {
    console.log("UPLOAD ERROR =>", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find();

    res.status(200).json({
      success: true,
      data: jobSeekers,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  registerJobSeeker,
  getProfile,
  updateProfile,
  uploadCV,
  getAllJobSeekers,
};