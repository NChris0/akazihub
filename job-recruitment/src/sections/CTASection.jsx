import React from "react";

import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-8">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Career Journey?
        </h2>

        <p className="text-lg mb-8">
          Join thousands of job seekers and employers using AkaziHub
          to discover opportunities and recruit top talent.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Create Free Account
          </Link>

          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Login
          </Link>
        </div>

      </div>
    </section>
  );
}

export default CTASection;