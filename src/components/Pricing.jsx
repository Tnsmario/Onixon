import React from "react";

function Pricing() {
  // return (
  //   <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //     <div class="md:flex">
  //       <div class="md:flex-shrink-0">
  //         <img
  //           class="h-48 w-full object-cover md:w-48"
  //           src="https://via.placeholder.com/200x200"
  //           alt="Service"
  //         />
  //       </div>
  //       <div class="p-8">
  //         <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
  //           Service
  //         </div>
  //         <p class="mt-2 text-gray-500">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat.
  //         </p>
  //         <div class="mt-4 flex items-center">
  //           <div class="text-lg font-semibold">$100</div>
  //           <div class="ml-4 text-gray-500">/hour</div>
  //         </div>
  //         <div class="mt-6">
  //           <button class="rounded-full px-5 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  //             Book Now
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Our Pricing
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Plan</h3>
            <p className="text-gray-600 text-base mb-6">
              Perfect for small businesses or personal projects.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">
              $10{" "}
              <span className="text-gray-600 text-base font-medium">
                /month
              </span>
            </p>
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
              Get Started
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Plan</h3>
            <p className="text-gray-600 text-base mb-6">
              Ideal for medium-sized businesses or projects.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">
              $20{" "}
              <span className="text-gray-600 text-base font-medium">
                /month
              </span>
            </p>
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
              Get Started
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Premium Plan
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Best for large businesses or complex projects.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">
              $30{" "}
              <span className="text-gray-600 text-base font-medium">
                /month
              </span>
            </p>
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
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
