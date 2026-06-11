import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaPlusCircle,
  FaBriefcase,
    FaFileAlt,
    FaUser,
  FaUpload,
   FaSignOutAlt,
} from "react-icons/fa";

function EmployerLayout() {
     
     const fullName =
    sessionStorage.getItem("fullName");

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">

        <h2 className="text-2xl font-bold mb-8">
          AkaziHub
        </h2>

        <div className="flex flex-col gap-6">

          <NavLink
            to="/employer"
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
            to="/employer/post-job"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaPlusCircle />
            <span>Post Job</span>
          </NavLink>

          <NavLink
            to="/employer/my-posted-jobs"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <FaBriefcase />
            <span>My Posted Jobs</span>
          </NavLink>

        </div>

      </div>

      {/* Main */}
      <div className="flex-1">

        <div className="bg-white shadow p-4 flex justify-between">
          <h2 className="font-semibold">
            Employer Dashboard
          </h2>

          <p>
            Welcome, {fullName}
          </p>
        </div>

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default EmployerLayout;