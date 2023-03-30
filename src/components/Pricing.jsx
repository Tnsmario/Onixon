import React from "react";
import { PresentationFeatureMenu } from "./PresentationFeatureMenu";
import { EcommFeature } from "./EcommFeature";

function Pricing() {
  return (
    <section className="bg-[#1F2937] py-20" id="prices">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#F4AD15] mb-12 text-center">
          Preţuri
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Website de prezentare
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Perfect pentru a prezenta si de a promova ideea unui business nou.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">€150</p>
            <ul className="text-md text-gray-600">
              {PresentationFeatureMenu.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Magazin online
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Magazin online 100% responsive perfect pentru business-urile care
              vor să-și vândă sau să-și promoveze produsele.
            </p>
            <p className="text-gray-800 text-2xl font-bold mb-6">€700</p>
            <ul className="text-md text-gray-600">
              {EcommFeature.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
