import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {FaHome,FaBriefcase,FaFileAlt,FaUser,FaUpload,} from "react-icons/fa";

function JobSeekerLayout() {
     
    const fullName = sessionStorage.getItem("fullName");

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">

        <h2 className="text-2xl font-bold mb-8">
          AkaziHub
        </h2>

        <div className="flex flex-col gap-6">

          <NavLink
            to="/jobseeker"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaHome />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/jobseeker/available-jobs"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaBriefcase />
            <span>Available Jobs</span>
          </NavLink>

          <NavLink
            to="/jobseeker/my-applications"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaFileAlt />
            <span>My Applications</span>
          </NavLink>

          <NavLink
            to="/jobseeker/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaUser />
            <span>My Profile</span>
          </NavLink>

          <NavLink
            to="/jobseeker/upload-cv"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaUpload />
            <span>Upload CV</span>
          </NavLink>

        </div>

        <button
          onClick={() => {
            sessionStorage.clear();
            window.location.href = "/login";
          }}
          className="mt-10 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1">

       {/* Navbar */}
<div className="bg-white shadow p-4 flex justify-between items-center">

  <h2 className="font-semibold">
    Job Seeker Dashboard
  </h2>

  <p>
    Welcome, {fullName}
  </p>

</div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default JobSeekerLayout;