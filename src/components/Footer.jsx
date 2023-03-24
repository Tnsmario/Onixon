import React from "react";
import "../components/css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center max-md:text-xs">
        <div>
          <p>
            Copyright &copy; 2023 powered by Onixon. Toate drepturile rezervate.
          </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Politica de confidenţialitate</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
