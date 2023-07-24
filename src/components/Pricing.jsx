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
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </div>
              <h3 className="service-title">POSTĂRI SOCIAL MEDIA</h3>
              <p className="parag">
                Echipa noastră specializată vă oferă servicii de creație de
                postări pe social media, ce vor captiva audiența și vor defini
                cu succes imaginea brandului dvs. Pe baza strategiilor
                personalizate, vom livra conținut relevant și atractiv,
                optimizat pentru succesul online.
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
                Obțineți un website personalizat și captivant, adaptat afacerii
                dvs. Echipa noastră talentată va crea un design atrăgător și
                funcțional, oferindu-vă o prezență online de impact. Lăsați-ne
                să construim website-ul perfect pentru succesul dvs. pe
                internet!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Pricing;
