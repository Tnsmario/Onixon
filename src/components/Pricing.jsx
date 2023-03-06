import React from "react";

function Pricing() {
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Preţuri
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Website de prezentare
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Perfect for small businesses or personal projects.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">$100</p>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 1
              </li>
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 2
              </li>
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 3
              </li>
              <li className="mb-4">
                <i className="fas fa-times mr-2"></i>Feature 4
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
              Cere Ofertă
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Magazin online
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Best for large businesses or complex projects.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">$400</p>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 1
              </li>
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 2
              </li>
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 3
              </li>
              <li className="mb-4">
                <i className="fas fa-check mr-2"></i>Feature 4
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
              Cere Ofertă
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
