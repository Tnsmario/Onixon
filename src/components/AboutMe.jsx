import React from "react";
import ceoImage from "../assets/img/ceo_image.jpeg";
import { Section } from "./Animation";

const AboutMe = () => {
  return (
    <section className="bg-[#1F2937] py-20">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              loading="lazy"
              className="h-64 rounded-[9999px] border-4 mb-4"
              src={ceoImage}
              alt="CEO Photo"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#f5f5dc] text-center mb-4">
            Mario Tanasă
          </h1>
          <h2 className="text-2xl font-medium text-[#F4AD15] text-center mb-8">
            Onixon's Founder
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-[#f5f5dc]">
            Mario is a skilled web developer with a passion for crafting
            exceptional online experiences. With expertise in front-end and
            back-end technologies, our team brings ideas to life with
            pixel-perfect precision and user-centric design. Contact us today to
            transform your vision into a captivating digital reality.
          </p>
        </div>
      </Section>
    </section>
  );
};

export default AboutMe;
