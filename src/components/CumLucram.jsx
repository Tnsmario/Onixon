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
                După completarea formularului de cerere, vom stabili împreuna,
                într-o convorbire telefonică sau pe zoom, obiectivele și ideile
                de design pentru a putea începe proiectul.
              </p>
            </div>
            <div className="step step2">
              <h3 className="step-title">Proiectăm design-ul</h3>
              <p className="step-description">
                Proiectarea constă în realizarea unui prototip al site-ului,
                urmând ca beneficiarul să ne spuna dacă este in regulă sau dacă
                dorește modificări adiționale.
              </p>
            </div>
            <div className="step step3">
              <h3 className="step-title">Achiziționăm domeniul</h3>
              <p className="step-description">
                După ce design-ul a fost stabilit, urmează achiziționarea
                domeniului pentru a putea lucra la site-ul propriu-zis.
              </p>
            </div>
            <div className="step step4">
              <h3 className="step-title">Creăm conținutul</h3>
              <p className="step-description">
                În primele zile de la achiziționarea domeniului, lucrăm la
                conținut pentru a arăta cât mai bine si pentru a se mișca fără
                probleme.
              </p>
            </div>
            <div className="step step5">
              <h3 className="step-title">Dezvoltăm funcționalitatea</h3>
              <p className="step-description">
                Punem accent pe performanță, așa că majoritatea timpului îl vom
                petrece îmbunătățind funcționalitatea si animațile, pentru ca
                site-ul să funcționeze la cote maxime.
              </p>
            </div>
            <div className="step step6">
              <h3 className="step-title">Testăm și livrăm</h3>
              <p className="step-description">
                Înainte de a livra rezultatul, testăm pentru a vedea posibilele
                erori pentru a primi un produs calitativ.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default CumLucram;
