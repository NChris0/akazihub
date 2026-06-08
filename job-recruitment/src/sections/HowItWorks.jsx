import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          How AkaziHub Works
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A simple recruitment process for both job seekers and employers.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Job Seekers */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">
              For Job Seekers
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Create an Account
            </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Complete Your Profile
               </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Upload CV & Certificates
              </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Search Available Jobs
              </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Apply Online
              </li>

              <li className="flex items-center gap-2">
                <FaCheckCircle />
                  Track Application Status
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-green-600">
              For Employers
            </h3>

           <ul className="space-y-4">
  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Register Company Account
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Complete Company Profile
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Post Job Vacancies
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Review Applications
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Shortlist Candidates
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle />
    Hire Top Talent
  </li>
</ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;