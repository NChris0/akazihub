import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/jobs/${jobId}`
      );

      setFormData(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/jobs/${jobId}`,
        formData
      );

      alert(response.data.message);

      navigate("/employer/my-posted-jobs");

    } catch (error) {
      console.log(error);
      alert("Failed To Update Job");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Edit Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="5"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Update Job
        </button>

      </form>
    </div>
  );
}

export default EditJob;