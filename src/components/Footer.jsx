import React from "react";
import instagram from "../assets/img/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p>&copy; 2023 Onixon. Toate drepturile rezervate.</p>
        </div>

        <img src={instagram} width={"30px"} alt="instagram image" />
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
