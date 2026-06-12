import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

const fetchProfile = async () => {
  try {
    const userId = sessionStorage.getItem("userId")

     console.log("USER ID =", userId);

    if (!userId) {
      return;
    }

    const response = await axios.get(
      `http://localhost:5000/api/jobseekers/profile/${userId}`
    );

    setUser(response.data.data);

  } catch (error) {
    console.log(error);
  }
};

  if (!user) {
    return <h2 className="p-8">Loading Profile...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl">

        <p className="mb-3">
          <strong>Full Name:</strong> {user.fullName}
        </p>

        <p className="mb-3">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="mb-3">
          <strong>Phone:</strong> {user.phone}
        </p>

        <p className="mb-3">
          <strong>Address:</strong> {user.address}
        </p>

        <p className="mb-3">
          <strong>Education:</strong> {user.education}
        </p>

        <p className="mb-3">
          <strong>Skills:</strong> {user.skills}
        </p>

        <p className="mb-3">
          <strong>Experience:</strong> {user.experience}
        </p>

        <p className="mb-4">
  <strong>CV Status:</strong>{" "}
  {user.cv ? (
    <span className="text-green-600 font-bold">
      Uploaded ✅
    </span>
  ) : (
    <span className="text-red-600 font-bold">
      Not Uploaded ❌
    </span>
  )}
</p>

   <Link to="/jobseeker/edit-profile">
    Edit Profile
   </Link>

 <Link
  to="/jobseeker/upload-cv"
  className="bg-green-600 text-white px-4 py-2 rounded inline-block ml-3"
>
  Upload CV
</Link>


      </div>
    </div>
  );
}

export default Profile;