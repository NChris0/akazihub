import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {
 const navigate = useNavigate();
const [formData, setFormData] = useState({
  email: "",
  password: "",
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
      "http://localhost:5000/api/auth/login",
      formData
    );

    console.log(response.data);

    sessionStorage.setItem(
      "token",
      response.data.token
    );

    sessionStorage.setItem(
      "role",
      response.data.role
    );
    sessionStorage.setItem(
  "userId",
  response.data.userId
);

sessionStorage.setItem(
  "fullName",
  response.data.fullName
);
    if (response.data.role === "jobseeker") {
  navigate("/jobseeker");
} else if (response.data.role === "employer") {
  navigate("/employer");
} else if (response.data.role === "admin") {
  navigate("/admin");
}

   

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login to AkaziHub
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border p-3 rounded-lg"
/>
       
       <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full border p-3 rounded-lg"
/>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Create Account
          </Link>
          
        </p>
        <p className="text-center mt-3 text-gray-600">
  Already have an account?{" "}
  <Link
    to="/"
    className="text-blue-600 font-semibold"
  >
    Home
  </Link>
</p>

      </div>
    </div>
  );
}

export default Login;