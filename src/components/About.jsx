import React from "react";
import "../assets/css/About.css";
import { Section } from "./Animation";

const About = () => {
  return (
    <section className="bg-[#1F2937] py-14" id="about">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-extrabold text-[#F4AD15] sm:text-4xl sm:leading-10 mb-8">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2 bg-[#f5f5dc] rounded-md py-5 px-5 max-md:my-5 desc misiune">
              <h3 className="text-2xl font-bold  mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our mission is to empower individuals and businesses to thrive
                in the digital world by delivering exceptional web development
                solutions. We strive to create innovative, user-friendly
                websites that not only reflect our clients' unique identities
                but also drive meaningful engagement and sustainable growth.
              </p>
            </div>
            <div className="md:w-1/2 bg-[#f5f5dc] rounded-md py-5 px-5 desc echipa">
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                As a solo web development business, the team is composed of a
                skilled and dedicated web development coder. While it may
                consist of a single individual, the expertise and capabilities
                of this coder are essential in delivering top-quality web
                development services.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default About;
