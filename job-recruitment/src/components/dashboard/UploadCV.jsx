import React, { useState } from "react";
import axios from "axios";

function UploadCV() {
  const [cv, setCv] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId");

      const formData = new FormData();
      formData.append("cv", cv);

      const response = await axios.put(
        `http://localhost:5000/api/jobseekers/upload-cv/${userId}`,
        formData
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
      alert("CV Upload Failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Upload CV
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setCv(e.target.files[0])
          }
          className="mb-4"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Upload CV
        </button>
      </form>
    </div>
  );
}

export default UploadCV;