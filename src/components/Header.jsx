import React from "react";
import "../assets/css/Header.css";
import headerImage from "../assets/img/header.svg";

export const Header = () => {
  return (
    <section className="header py-[14rem] bg-[#1F2937] max-md:py-[14rem]">
      <div className="container mx-auto  flex justify-between flex-wrap items-center gap-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl">Onixon</h1>
        <div className="image-wraper max-md:invisible">
          <img src={headerImage} alt="header_image hidden" />
        </div>
      </div>
    </section>
  );
};
