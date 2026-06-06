import React from "react";

function WhyChooseUs() {
  const features = [
    "Easy Job Search",
    "Online Job Applications",
    "CV & Certificate Management",
    "Application Tracking",
    "Fast Recruitment Process",
    "Secure User Accounts",
    "Employer Dashboard",
    "Job Seeker Dashboard",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose AkaziHub?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need to simplify recruitment and job searching.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-center">
                {feature}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;