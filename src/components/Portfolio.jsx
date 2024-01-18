import React from "react";
import "../assets/css/Portfolio.css";
import proiectDemo from "../assets/img/DemoWebsiteOnixon.png";
import { Section } from "./Animation";

function Portfolio() {
  return (
    <section className="proiecteSection">
      <Section>
        <div className="h-full container mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="section-title text-[#f4ad15]">Proiecte</h2>
          <div className="proiecteContainer">
            <div className="proiect">
              <h2 className="titleProiect">Website de prezentare (Demo)</h2>
              <a
                href="https://tnsmario.github.io/WebsiteDemo/"
                target="__blank"
              >
                <img
                  className="pozaProiect"
                  src={proiectDemo}
                  alt="poza proiect demo"
                />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Portfolio;
