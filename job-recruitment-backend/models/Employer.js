const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    companyEmail: {
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

    industryType: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Employer", employerSchema);