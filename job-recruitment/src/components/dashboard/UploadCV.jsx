import React, { useState } from "react";
import axios from "axios";

function UploadCV() {
  const [cv, setCv] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = sessionStorage.getItem("userId");

      console.log("USER ID =", userId);

      if (!userId) {
        alert("User ID not found. Please login again.");
        return;
      }

      if (!cv) {
        alert("Please select a CV file");
        return;
      }

      const formData = new FormData();
      formData.append("cv", cv);

      const response = await axios.put(
        `http://localhost:5000/api/jobseekers/upload-cv/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "CV Upload Failed"
      );
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
          className="mb-4 block"
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