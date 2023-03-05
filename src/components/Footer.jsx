import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p>&copy; 2023 Company Name. All Rights Reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
