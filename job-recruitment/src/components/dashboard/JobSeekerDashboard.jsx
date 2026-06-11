import React from "react";

function JobSeekerDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Job Seeker Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Applications
          </h2>

          <p className="text-3xl font-bold mt-2">
            4
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Saved Jobs
          </h2>

          <p className="text-3xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Profile Completion
          </h2>

          <p className="text-3xl font-bold mt-2">
            80%
          </p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-8">

        <h2 className="text-xl font-bold mb-4">
          Recent Activity
        </h2>

        <p>
          You have recently applied for jobs.
        </p>

      </div>

    </div>
  );
}

export default JobSeekerDashboard;