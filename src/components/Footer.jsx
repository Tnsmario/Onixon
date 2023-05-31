import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto">
            <p className="text-gray-300 text-sm max-sm:text-center">
              Onixon &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <ul className="flex space-x-4 max-sm:space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="lightgray"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <li className="text-gray-300 ">office@onixon.ro</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
