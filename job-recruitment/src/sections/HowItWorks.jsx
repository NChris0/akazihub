import React from "react";

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
              <li>✅ Create an Account</li>
              <li>✅ Complete Your Profile</li>
              <li>✅ Upload CV & Certificates</li>
              <li>✅ Search Available Jobs</li>
              <li>✅ Apply Online</li>
              <li>✅ Track Application Status</li>
            </ul>
          </div>

          {/* Employers */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-green-600">
              For Employers
            </h3>

            <ul className="space-y-4">
              <li>✅ Register Company Account</li>
              <li>✅ Complete Company Profile</li>
              <li>✅ Post Job Vacancies</li>
              <li>✅ Review Applications</li>
              <li>✅ Shortlist Candidates</li>
              <li>✅ Hire Top Talent</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;