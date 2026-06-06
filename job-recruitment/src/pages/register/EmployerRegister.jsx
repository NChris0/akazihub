import React from "react";

function EmployerRegister() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-8">
          Employer Registration
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Company Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Physical Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Industry Type"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="4"
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
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
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