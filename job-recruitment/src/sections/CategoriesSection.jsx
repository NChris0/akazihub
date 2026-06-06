import React from "react";

function CategoriesSection() {
  const categories = [
    "Information Technology",
    "Finance",
    "Education",
    "Healthcare",
    "Engineering",
    "Marketing",
    "Human Resources",
    "Customer Support",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Job Categories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore opportunities across different industries.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoriesSection;