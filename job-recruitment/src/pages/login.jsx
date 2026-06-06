import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

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

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formData);
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

      </div>
    </div>
  );
}

export default Login;