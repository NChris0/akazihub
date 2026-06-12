import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageJobSeekers() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/jobseekers"
      );

      setJobSeekers(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteJobSeeker = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Job Seeker?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/jobseekers/${id}`
      );

      fetchJobSeekers();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Manage Job Seekers
      </h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                Full Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Skills
              </th>

              <th className="p-4 text-left">
                Experience
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {jobSeekers.map((jobSeeker) => (
              <tr
                key={jobSeeker._id}
                className="border-t"
              >
                <td className="p-4">
                  {jobSeeker.fullName}
                </td>

                <td className="p-4">
                  {jobSeeker.email}
                </td>

                <td className="p-4">
                  {jobSeeker.phone}
                </td>

                <td className="p-4">
                  {jobSeeker.skills}
                </td>

                <td className="p-4">
                  {jobSeeker.experience}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      deleteJobSeeker(jobSeeker._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageJobSeekers;