import React from "react";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminLayout() {
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
          AkaziHub Admin
        </h2>
        <div className="flex flex-col gap-6">

  <NavLink
    to="/admin"
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
    to="/admin/jobs"
    className={({ isActive }) =>
      `flex items-center gap-3 p-2 rounded ${
        isActive ? "bg-blue-600" : ""
      }`
    }
  >
    <FaBriefcase />
    <span>Manage Jobs</span>
  </NavLink>

  <NavLink
    to="/admin/employers"
    className={({ isActive }) =>
      `flex items-center gap-3 p-2 rounded ${
        isActive ? "bg-blue-600" : ""
      }`
    }
  >
    <FaBuilding />
    <span>Manage Employers</span>
  </NavLink>

  <NavLink
    to="/admin/jobseekers"
    className={({ isActive }) =>
      `flex items-center gap-3 p-2 rounded ${
        isActive ? "bg-blue-600" : ""
      }`
    }
  >
    <FaUsers />
    <span>Manage Job Seekers</span>
  </NavLink>

  <button
    onClick={handleLogout}
    className="flex items-center gap-3 p-2 rounded text-left"
  >
    <FaSignOutAlt />
    <span>Logout</span>
  </button>

</div>

      </div>

      {/* Main */}
      <div className="flex-1">

        <div className="bg-white shadow p-4">
          Admin Dashboard
        </div>

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;