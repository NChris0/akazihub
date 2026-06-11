import React, { useEffect, useState } from "react";
import axios from "axios";

function EditProfile() {
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    education: "",
    skills: "",
    experience: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await axios.get(
        `http://localhost:5000/api/jobseekers/profile/${userId}`
      );

      setFormData({
        phone: response.data.data.phone,
        address: response.data.data.address,
        education: response.data.data.education,
        skills: response.data.data.skills,
        experience: response.data.data.experience,
      });

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
      const userId = localStorage.getItem("userId");

      const response = await axios.put(
        `http://localhost:5000/api/jobseekers/profile/${userId}`,
        formData
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
      alert("Failed To Update Profile");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Update Profile
        </button>

      </form>
    </div>
  );
}

export default EditProfile;