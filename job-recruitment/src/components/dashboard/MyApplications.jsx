import React, { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const userId = sessionStorage.getItem("userId");

      const response = await axios.get(
        `http://localhost:5000/api/applications/user/${userId}`
      );

      setApplications(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        My Applications
      </h1>

      {applications.length === 0 ? (
        <h2>No Applications Yet</h2>
      ) : (
        <div className="grid gap-6">

          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {app.jobId?.title}
              </h2>

              <p>
                Company: {app.jobId?.company}
              </p>

              <p>
                Location: {app.jobId?.location}
              </p>

              <p>
                Status: {app.status}
              </p>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default MyApplications;