const Employer = require("../models/Employer");
const bcrypt = require("bcryptjs");

const registerEmployer = async (req, res) => {
  try {
   const hashedPassword = await bcrypt.hash(
  req.body.password,
  10
);

const employer = await Employer.create({
  ...req.body,
  password: hashedPassword,
});

    res.status(201).json({
      success: true,
      message: "Employer Registered Successfully",
      data: employer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  };
  const getAllEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();

    res.status(200).json({
      success: true,
      data: employers,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  registerEmployer,
  getAllEmployers,
};