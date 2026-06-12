import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/jobs/${id}`
      );

      setJob(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = async () => {
    try {
      const applicantId =
        sessionStorage.getItem("userId");

      const response = await axios.post(
        "http://localhost:5000/api/applications/apply",
        {
          jobId: job._id,
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

  if (!job) {
    return <h2 className="p-8">Loading...</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-4">
          {job.title}
        </h1>

        <p className="mb-2">
          <strong>Company:</strong> {job.company}
        </p>

        <p className="mb-2">
          <strong>Location:</strong> {job.location}
        </p>

        <p className="mb-2">
          <strong>Salary:</strong> {job.salary}
        </p>

        <p className="mb-4">
          <strong>Category:</strong> {job.category}
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Job Description
        </h2>

        <p className="text-gray-700 mb-6">
          {job.description}
        </p>

        <button
          onClick={handleApply}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;