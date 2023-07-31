import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";
import { Section } from "./Animation";

function Oferta() {
  return (
    <section className="bg-[#1F2937] py-20" id="requestOffer">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 animation"></div>
      </Section>
    </section>
  );
}

export default Oferta;
