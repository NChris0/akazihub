import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            AkaziHub
          </h2>

          <p className="text-gray-400">
            Smart Employment and Recruitment Platform connecting
            job seekers and employers.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Jobs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Email: info@akazihub.com</li>
            <li>Phone: +250 700 000 000</li>
            <li>Kigali, Rwanda</li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-500">
        © 2026 AkaziHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;