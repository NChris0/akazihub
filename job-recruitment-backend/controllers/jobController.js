const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(201).json({
      success: true,
      message: "Job Posted Successfully",
      data: job,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json({
      success: true,
      data: jobs,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getEmployerJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      employerId: req.params.employerId,
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createJob,
  getAllJobs,
  getEmployerJobs,
  deleteJob,
};