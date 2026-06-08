import React, { useEffect, useState } from "react";
import axios from "axios";

function AvailableJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data.data);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Available Jobs
      </h1>

      {loading ? (
        <h2>Loading Jobs...</h2>
      ) : jobs.length === 0 ? (
        <h2>No Jobs Available</h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold mb-2">
                {job.title}
              </h2>

              <p className="text-gray-700 mb-2">
                <strong>Company:</strong> {job.company}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {job.location}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Salary:</strong> {job.salary}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {job.category}
              </p>

              <p className="text-gray-600 mb-4">
                {job.description}
              </p>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Apply Now
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AvailableJobs;