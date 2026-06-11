import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalEmployers, setTotalEmployers] = useState(0);
  const [totalJobSeekers, setTotalJobSeekers] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Total Jobs
      const jobsResponse = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setTotalJobs(
        jobsResponse.data.data.length
      );

      // Total Employers
      const employersResponse = await axios.get(
        "http://localhost:5000/api/employers"
      );

      setTotalEmployers(
        employersResponse.data.data.length
      );

      // Total Job Seekers
      const jobSeekersResponse = await axios.get(
        "http://localhost:5000/api/jobseekers"
      );

      setTotalJobSeekers(
        jobSeekersResponse.data.data.length
      );

      // Total Applications
      const applicationsResponse = await axios.get(
        "http://localhost:5000/api/applications"
      );

      setTotalApplications(
        applicationsResponse.data.data.length
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Welcome Admin
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">
            Total Jobs
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalJobs}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">
            Employers
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalEmployers}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">
            Job Seekers
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalJobSeekers}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">
            Applications
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalApplications}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;