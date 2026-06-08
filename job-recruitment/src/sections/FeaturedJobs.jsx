import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";

function FeaturedJobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Kigali Tech Ltd",
      location: "Kigali",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      company: "Smart Solutions",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Accountant",
      company: "Finance Hub",
      location: "Kigali",
      type: "Part Time",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Discover the latest opportunities from top employers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {job.title}
              </h3>

              <p className="text-gray-600 mb-2">
                {job.company}
              </p>

              <p className="text-gray-600 mb-2 flex items-center gap-1">
                <HiOutlineMapPin />
                  {job.location}
              </p>
              

              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded">
                {job.type}
              </span>

              <button className="block mt-5 bg-blue-600 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;