import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MyPostedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const employerId = sessionStorage.getItem("userId");

      const response = await axios.get(
        `http://localhost:5000/api/jobs/employer/${employerId}`
      );

      setJobs(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        My Posted Jobs
      </h1>

      {jobs.length === 0 ? (
        <h2>No Jobs Posted Yet</h2>
      ) : (
        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {job.title}
              </h2>

              <p>
                Company: {job.company}
              </p>

              <p>
                Location: {job.location}
              </p>

              <p>
                Salary: {job.salary}
              </p>

              <p>
                Category: {job.category}
              </p>

               <Link
                  to={`/employer/view-applicants/${job._id}`}
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
                >
                 View Applicants
                </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPostedJobs;