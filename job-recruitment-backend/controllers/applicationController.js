const Application = require("../models/Application");

const applyJob = async (req, res) => {
  try {
    const application = await Application.create({
      jobId: req.body.jobId,
      applicantId: req.body.applicantId,
    });

    res.status(201).json({
      success: true,
      message: "Application Submitted Successfully",
      data: application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicantId: req.params.userId,
    }).populate("jobId");

    res.status(200).json({
      success: true,
      data: applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getApplicantsByJob = async (req, res) => {
  try {
    const applications = await Application.find({
      jobId: req.params.jobId,
    }).populate("applicantId");

    res.status(200).json({
      success: true,
      data: applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.applicationId,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Application Status Updated",
      data: application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json({
      success: true,
      data: applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  applyJob,
  getMyApplications,
  getApplicantsByJob,
  updateApplicationStatus,
  getAllApplications,
};