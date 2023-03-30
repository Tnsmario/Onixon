import React from "react";
import ceoImage from "../assets/img/ceo_photo.jpg";

const AboutMe = () => {
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img
            loading="lazy"
            className="h-64 rounded-[9999px] border-4 border-gray-300 mb-4"
            src={ceoImage}
            alt="CEO Photo"
          />
        </div>
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Mario Tanasă
        </h1>
        <h2 className="text-2xl font-medium text-[#F4AD15] text-center mb-8">
          Fondator & CEO Onixon
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-white">
          Salut, mă numesc Mario, fondatorul Onixon, și sunt singurul om care
          este implicat în mod direct în crearea unui website de la design până
          la funcționalitate. Încerc din răsputeri să aduc un plus afacerilor
          voastre prin a vă promova în mediul online.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
