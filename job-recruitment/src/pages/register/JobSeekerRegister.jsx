import React from "react";


function JobSeekerRegister() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-8">
          Job Seeker Registration
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Education Level"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Skills"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
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

