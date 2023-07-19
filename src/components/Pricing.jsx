import React from "react";
import { Section } from "./Animation";
import "../assets/css/Pricing.css";

function Pricing() {
  return (
    <section className=" bg-[#1F2937] py-20" id="prices">
      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F4AD15] mb-12 text-center">
            Servicii
          </h2>
          <div className="card-wraper">
            <div className="card-container text-center bg-white">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[30px] h-[30px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="service-title">WEBSITE DESIGN</h3>
              <p className="parag">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus id, soluta obcaecati tempora itaque culpa quis
                ratione similique cupiditate quas reprehenderit voluptatum dolor
                iste dolorum nisi esse ea placeat dignissimos.
              </p>
            </div>
            <div className="card-container text-center bg-white">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[30px] h-[30px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="service-title">WEB DEVELOPMENT</h3>
              <p className="parag">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus id, soluta obcaecati tempora itaque culpa quis
                ratione similique cupiditate quas reprehenderit voluptatum dolor
                iste dolorum nisi esse ea placeat dignissimos.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Pricing;
