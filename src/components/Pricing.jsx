import React from "react";
import { PresentationFeatureMenu } from "./PresentationFeatureMenu";
import { EcommFeature } from "./EcommFeature";
import { Section } from "./Animation";

function Pricing() {
  return (
    <section className=" bg-[#1F2937] py-20" id="prices">
      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F4AD15] mb-12 text-center">
            Prețuri
          </h2>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className=" bg-[#f5f5dc] shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Presentation Website (One Page / Multiple Pages)
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Unlock online visibility, credibility, and customer engagement
                with a captivating presentation website.
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

            <div className="bg-[#f5f5dc] shadow-md rounded-lg px-6 py-8 mx-4 my-4 sm:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ecommerce Store
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Expand your reach, boost sales, and provide seamless shopping
                experiences with a powerful ecommerce website.
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
