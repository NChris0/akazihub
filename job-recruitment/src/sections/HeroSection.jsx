import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Find Your Dream Job and Hire Top Talent
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          AkaziHub connects job seekers and employers in one smart platform.
          Search jobs, apply online, upload your CV, and manage your career.
          Employers can post vacancies, review applications, and recruit qualified candidates faster.
        </p>

        <div className="flex justify-center gap-4">
          <Link
  to="/register"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Create Account
</Link>

<Link
  to="/categories"
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
>
  Browse Jobs
</Link>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;