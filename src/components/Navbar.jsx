import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import onixon from "../assets/img/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="list-none">
                <img className="h-9" src={onixon} alt="Logo" />
              </a>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4 list-none">
                <li>
                  <a
                    href="/"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#prices"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Prices
                  </a>
                </li>
                <li>
                  <a
                    href="#oferta"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Request an offer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" ref={ref}>
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 list-none">
              <li>
                <a
                  href="/"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#prices"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Prices
                </a>
              </li>
              <li>
                <a
                  href="#oferta"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Request an offer
                </a>
              </li>
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
