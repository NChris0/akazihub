import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AvailableJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

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

  const handleApply = async (jobId) => {
    try {
      const applicantId =
        sessionStorage.getItem("userId");

      const response = await axios.post(
        "http://localhost:5000/api/applications/apply",
        {
          jobId,
          applicantId,
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Application Failed"
      );
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      job.category === category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Available Jobs
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border p-3 rounded"
        >
          <option value="">
            All Categories
          </option>

          <option value="IT">
            IT
          </option>

          <option value="Finance">
            Finance
          </option>

          <option value="Marketing">
            Marketing
          </option>

          <option value="Engineering">
            Engineering
          </option>

          <option value="Healthcare">
            Healthcare
          </option>

        </select>

      </div>

      {loading ? (
        <h2>Loading Jobs...</h2>

      ) : filteredJobs.length === 0 ? (

        <h2>No Jobs Found</h2>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >

              <h2 className="text-xl font-bold mb-2">
                {job.title}
              </h2>

              <p className="text-gray-700 mb-2">
                <strong>Company:</strong>{" "}
                {job.company}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Location:</strong>{" "}
                {job.location}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Salary:</strong>{" "}
                {job.salary}
              </p>

              <p className="text-gray-700 mb-2">
                <strong>Category:</strong>{" "}
                {job.category}
              </p>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {job.description}
              </p>

              <div className="flex gap-3 flex-wrap">

                <Link
                  to={`/job/${job._id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    handleApply(job._id)
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Apply Now
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AvailableJobs;