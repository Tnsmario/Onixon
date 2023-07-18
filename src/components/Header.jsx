import React from "react";
import "../assets/css/Header.css";
import headerImage from "../assets/img/header.svg";
import { Section } from "./Animation";

export const Header = () => {
  return (
    <section className="header py-[16rem] bg-[#1F2937] max-md:py-[14rem]">
      <Section>
        <div className="container mx-auto flex justify-around flex-wrap items-center gap-12 px-4 sm:px-6 lg:px-8 max-md:justify-center ">
          <div className="text-center text-animation text-[#f5f5dc]">
            <h1 className="text-5xl">Onixon</h1>
            <h2 className="text-2xl text leading-snug ">
              Partenerul tău pentru
              <span className="text-[#F4AD15]"> creșterea digitală!</span>
            </h2>
          </div>
          <div className="max-lg:hidden animation">
            <img src={headerImage} className="h-80" alt="header_image" />
          </div>
        </div>
      </Section>
    </section>
  );
};
