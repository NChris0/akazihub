import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageEmployers() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/employers"
      );

      setEmployers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employer?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/employers/${id}`
      );

      fetchEmployers();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Manage Employers
      </h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100 ">
            <tr>

              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {employers.map((employer) => (
              <tr
                key={employer._id}
                className="border-t"
              >
                

                <td className="p-4">
                  {employer.companyName}
                </td>

                

                <td className="p-4">
                  {employer.phone}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      deleteEmployer(employer._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageEmployers;