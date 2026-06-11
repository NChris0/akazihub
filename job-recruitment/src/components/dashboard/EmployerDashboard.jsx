import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployerDashboard() {

  const [totalJobs, setTotalJobs] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [acceptedApplications, setAcceptedApplications] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {

      const employerId =
        sessionStorage.getItem("userId");

      const response = await axios.get(
        `http://localhost:5000/api/jobs/employer/${employerId}`
      );

      const jobs = response.data.data;

      setTotalJobs(jobs.length);

      let applicationsCount = 0;
      let acceptedCount = 0;

     for (const job of jobs) {

  const applicantsResponse =
    await axios.get(
      `http://localhost:5000/api/applications/job/${job._id}`
    );

  const applications =
    applicantsResponse.data.data;

  applicationsCount +=
    applications.length;

  applications.forEach((application) => {

    if (
      application.status === "Accepted"
    ) {
      acceptedCount++;
    }

  });

}

      setTotalApplications(
        applicationsCount
      );

      setAcceptedApplications(
        acceptedCount
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Welcome Employer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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
            Applications
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalApplications}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">
            Accepted
          </h3>

         <p className="text-3xl font-bold mt-2">
            {acceptedApplications}
          </p>
        </div>

      </div>

    </div>
  );
}

export default EmployerDashboard;