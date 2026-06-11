const JobSeeker = require("../models/JobSeeker");
const Employer = require("../models/Employer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
  email === "admin@gmail.com" &&
  password === "admin123"
) {
  return res.json({
    success: true,
    role: "admin",
    fullName: "System Admin",
    token: "admin-token",
    userId: "admin-id",
  });
}

    let user = await JobSeeker.findOne({ email });

    let role = "jobseeker";

    if (!user) {
      user = await Employer.findOne({
        companyEmail: email,
      });

      role = "employer";
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

   res.json({
  success: true,
  message: "Login Successful",
  token,
  role,
  userId: user._id,
  fullName: 
            role === "employer"
           ? user.companyName
           : user.fullName,
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  loginUser,
};