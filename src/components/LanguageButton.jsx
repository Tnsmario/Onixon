import React from "react";
import "../assets/css/Language.css";
import { useState } from "react";
import ReactModal from "react-modal";

const styles = {
  content: {
    height: "400px",
    width: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-lg:hidden flex items-center">
      <button type="button" className="button" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white mr-1 language"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
        Language
      </button>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        style={styles}
        contentLabel="Test Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sunt!
        <button
          type="button"
          className="text-black close-button"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};
