import React, { useState } from "react";
import axios from "axios";

function EmployerRegister() {
  const [formData, setFormData] = useState({
  companyName: "",
  companyEmail: "",
  phone: "",
  address: "",
  industryType: "",
  description: "",
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
      "http://localhost:5000/api/employers/register",
      formData
    );

    console.log(response.data);
    alert("Employer Registered Successfully");

    setFormData({
      companyName: "",
      companyEmail: "",
      phone: "",
      address: "",
      industryType: "",
      description: "",
      password: "",
      confirmPassword: "",
    });

  } catch (error) {
    console.error(error);
    alert("Registration Failed");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-8">
          Employer Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

         <input
  type="text"
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  placeholder="Company Name"
  className="w-full border p-3 rounded-lg"
/>

      <input
  type="email"
  name="companyEmail"
  value={formData.companyEmail}
  onChange={handleChange}
  placeholder="Company Email"
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
  placeholder="Physical Address"
  className="w-full border p-3 rounded-lg"
/>

          <input
  type="text"
  name="industryType"
  value={formData.industryType}
  onChange={handleChange}
  placeholder="Industry Type"
  className="w-full border p-3 rounded-lg"
/>

        <textarea
  rows="4"
  name="description"
  value={formData.description}
  onChange={handleChange}
  placeholder="Company Description"
  className="w-full border p-3 rounded-lg"
></textarea>

          <div>
            <label className="block mb-2 font-medium">
              Company Logo
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
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            Create Employer Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default EmployerRegister;