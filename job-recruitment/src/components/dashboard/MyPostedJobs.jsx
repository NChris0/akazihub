import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function MyPostedJobs() {
   const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const employerId = sessionStorage.getItem("userId");
      console.log("EMPLOYER ID =", employerId);

      const response = await axios.get(
        `http://localhost:5000/api/jobs/employer/${employerId}`
      );

      setJobs(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (jobId) => {
  try {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    await axios.delete(
      `http://localhost:5000/api/jobs/${jobId}`
    );

    fetchJobs();

    alert("Job Deleted Successfully");

  } catch (error) {
    console.log(error);
    alert("Failed To Delete Job");
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

            <div className="flex gap-3 mt-4">

              <Link
                to={`/employer/view-applicants/${job._id}`}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                View Applicants
              </Link>

              <button
                onClick={() =>
                  navigate(`/employer/edit-job/${job._id}`)
                }
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteJob(job._id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default MyPostedJobs;