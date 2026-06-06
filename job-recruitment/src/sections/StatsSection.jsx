import React from "react";

function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="shadow-md p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
            <p className="mt-2 text-gray-600">Job Seekers</p>
          </div>

          <div className="shadow-md p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-600">1000+</h2>
            <p className="mt-2 text-gray-600">Employers</p>
          </div>

          <div className="shadow-md p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-600">300+</h2>
            <p className="mt-2 text-gray-600">Available Jobs</p>
          </div>

          <div className="shadow-md p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-600">95%</h2>
            <p className="mt-2 text-gray-600">Successful Placements</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default StatsSection;