import React from "react";

import { Link } from "react-router-dom";

function RoleSelection() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Choose your account type to continue
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/register/jobseeker"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-6xl mb-4">👤</div>

            <h2 className="text-2xl font-bold mb-3">
              Job Seeker
            </h2>

            <p className="text-gray-600">
              Search jobs, upload CV, apply online and
              track your applications.
            </p>
          </Link>

          <Link
            to="/register/employer"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-6xl mb-4">🏢</div>

            <h2 className="text-2xl font-bold mb-3">
              Employer
            </h2>

            <p className="text-gray-600">
              Post vacancies, review applications
              and recruit qualified candidates.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;