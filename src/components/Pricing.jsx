import React from "react";
import { PresentationFeatureMenu } from "./PresentationFeatureMenu";
import { EcommFeature } from "./EcommFeature";
import { Section } from "./Animation";

function Pricing() {
  return (
    <section className=" bg-[#1F2937] py-20" id="prices">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#F4AD15] mb-12 text-center">
            Preţuri
          </h2>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3 prezentare">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Website de Prezentare (O pagină / Pagini multiple)
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Site simplu și modern, realizat într-o singură pagină.
              </p>
              <p className="text-gray-800 text-2xl font-bold mb-6">
                €100 / €200
              </p>
              <ul className="text-md text-black">
                {PresentationFeatureMenu.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-1/3 magazin">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Magazin Online
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Magazin online 100% responsive perfect pentru business-urile
                care vor să-și vândă sau să-și promoveze produsele.
              </p>
              <p className="text-gray-800 text-2xl font-bold mb-6">€600</p>
              <ul className="text-md text-black">
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
      </Section>
    </section>
  );
}

export default Pricing;
