import react from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold">
        Job Recruitment System
      </h1>

      <div className="flex gap-4">
        <Link
          to="/Login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;