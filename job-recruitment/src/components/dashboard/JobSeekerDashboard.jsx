import React from "react";
import { Link } from "react-router-dom";

function JobSeekerDashboard() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Welcome Job Seeker
      </h1>

      <Link
        to="/available-jobs"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Browse Available Jobs
      </Link>

    </div>
  );
}

export default JobSeekerDashboard;