import React from "react";
import "../assets/css/CumLucram.css";
import { Section } from "./Animation";

function CumLucram() {
  return (
    <section className="how-we-work-section">
      <Section>
        <div className="h-full container mx-auto px-4 sm:px-6">
          <h2 className="section-title text-[#f4ad15]">
            Cum realizăm un website
          </h2>
          <div className="step-container">
            <div className="step step1">
              <h3 className="step-title">Stabilim obiectivele</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
            <div className="step step2">
              <h3 className="step-title">Proiectăm design-ul</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
            <div className="step step3">
              <h3 className="step-title">Achiziționăm domeniul</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
            <div className="step step4">
              <h3 className="step-title">Creăm conținutul</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
            <div className="step step5">
              <h3 className="step-title">Dezvoltăm funcționalitatea</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
            <div className="step step6">
              <h3 className="step-title">Testăm și livrăm</h3>
              <p className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan neque eu ex consectetur, ac dapibus lacus semper.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default CumLucram;
