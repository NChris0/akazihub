import React from "react";
import { Link } from "react-router-dom";

function EmployerDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome Employer
      </h1>
      <Link
  to="/post-job"
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  Post New Job
</Link>
    </div>
  );
}

export default EmployerDashboard;