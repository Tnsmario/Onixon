import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Oferta.css";
import { Section } from "./Animation";
import email_photo from "../assets/img/email.svg";

function Oferta() {
  const ref = useRef();

  return (
    <section className="bg-[#1F2937] py-20" id="requestOffer">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="contact-text">Contactați-ne</h2>
          <div className="">
            <div className="img-wraper">
              <img
                src={email_photo}
                className="w-[20rem] h-[20rem]"
                alt="email_illustration"
              />
            </div>
            <div className="form-wraper">
              <form action="" ref={ref}></form>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Oferta;
