const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    education: {
      type: String,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    cv: {
  type: String,
  default: "",
},

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobSeeker", jobSeekerSchema);