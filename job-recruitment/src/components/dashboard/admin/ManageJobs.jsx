import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/jobs/${jobId}`
      );

      alert("Job Deleted Successfully");

      fetchJobs();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Manage Jobs
      </h1>

      {jobs.length === 0 ? (
        <h2>No Jobs Found</h2>
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

              <button
                onClick={() =>
                  deleteJob(job._id)
                }
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete Job
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default ManageJobs;