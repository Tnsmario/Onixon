import React from "react";
import "../assets/css/Header.css";
import headerImage from "../assets/img/header.svg";
import { Section } from "./Animation";

export const Header = () => {
  return (
    <section className="header py-[14rem] bg-[#1F2937] max-md:py-[14rem]">
      <Section>
        <div className="container mx-auto flex justify-around flex-wrap items-center gap-12 px-4 sm:px-6 lg:px-8 max-md:justify-center ">
          <div className="text-center text-animation text-[#f5f5dc]">
            <h1 className="text-6xl">Onixon</h1>
            <h2 className="text-3xl text leading-snug ">
              Coding the Future
              <span className="text-[#F4AD15]"> Today.</span>
            </h2>
          </div>
          <div className="max-lg:hidden animation">
            <img src={headerImage} className="h-max" alt="header_image" />
          </div>
        </div>
      </Section>
    </section>
  );
};
