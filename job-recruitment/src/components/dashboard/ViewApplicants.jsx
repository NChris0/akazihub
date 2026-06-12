import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewApplicants() {
  const { jobId } = useParams();

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const updateStatus = async (
  applicationId,
  status
) => {
  try {
    await axios.put(
      `http://localhost:5000/api/applications/${applicationId}`,
      {
        status,
      }
    );

    fetchApplicants();

  } catch (error) {
    console.log(error);
  }
};

  const fetchApplicants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/applications/job/${jobId}`
      );

      setApplicants(response.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  console.log(applicants);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Job Applicants
      </h1>

      {applicants.length === 0 ? (
        <h2>No Applicants Yet</h2>
      ) : (
        <div className="grid gap-6">
          {applicants.map((application) => (
            <div
              key={application._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {application.applicantId.fullName}
              </h2>

              <p>
                Email: {application.applicantId.email}
              </p>

              <p>
                Phone: {application.applicantId.phone}
              </p>

              <p>
                Education: {application.applicantId.education}
              </p>

              <p>
                Skills: {application.applicantId.skills}
              </p>

              <p>
                Experience: {application.applicantId.experience}
              </p>

              <p>
                CV File: {application.applicantId.cv}
              </p>

              <p>
                Status: {application.status}
              </p>

              <div className="flex gap-3 mt-4">
              {application.applicantId?.cv ? (
  <a
    href={`http://localhost:5000/uploads/${application.applicantId.cv}`}
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
  >
    Download CV
  </a>
) : (
  <p className="text-red-500 mt-3">
    No CV Uploaded
  </p>
)}

  <button
    onClick={() =>
      updateStatus(
        application._id,
        "Accepted"
      )
    }
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
    Accept
  </button>

  <button
    onClick={() =>
      updateStatus(
        application._id,
        "Rejected"
      )
    }
    className="bg-red-600 text-white px-4 py-2 rounded"
  >
    Reject
  </button>

</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewApplicants;