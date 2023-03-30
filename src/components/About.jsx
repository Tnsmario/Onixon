import React from "react";
import { Link } from "react-scroll";
import "../assets/css/About.css";

const About = () => {
  return (
    <section className="bg-[#1F2937] py-14" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-[#F4AD15] sm:text-4xl sm:leading-10 mb-8">
          Despre Noi
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6 ">
          <div className="md:w-1/2 bg-white rounded-md py-5 px-5 max-md:my-5 misiune">
            <h3 className="text-2xl font-bold  mb-4">Misiune</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Un website este o parte vitala cand vine vorba de un business,
              asadar, pentru o performanta de top folosim tehnologii avansate
              precum React, CSS3, TailwindCSS si NodeJS pentru a construi un
              website rapid si calitativ.
            </p>
          </div>
          <div className="md:w-1/2 bg-white rounded-md py-5 px-5 echipa">
            <h3 className="text-2xl font-bold mb-4">Echipă</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Momentan echipa este formata doar din fondator. Fondator care pune
              suflet in munca pe care o depune in crearea unui website. Echipa
              se va dezvolta pe parcurs pentru a livra cele mai bune servicii.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
