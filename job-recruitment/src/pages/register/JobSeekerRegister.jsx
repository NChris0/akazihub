import React, { useState } from "react";
import axios from "axios";

function JobSeekerRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobseekers/register",
        formData
      );

      console.log(response.data);
      alert("Job Seeker Registered Successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        education: "",
        skills: "",
        experience: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Job Seeker Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Education Level"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Work Experience"
            rows="4"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <div>
            <label className="block mb-2 font-medium">
              Upload CV / Resume
            </label>

            <input
              type="file"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Upload Certificates
            </label>

            <input
              type="file"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Create Job Seeker Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default JobSeekerRegister;