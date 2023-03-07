import React from "react";
import ceoImage from "../assets/img/ceo_photo.jpg";

const AboutMe = () => {
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img
            className="h-64 rounded-[9999px] border-4 border-gray-300 mb-4"
            src={ceoImage}
            alt="CEO Photo"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Mario Tanasă</h1>
        <h2 className="text-2xl font-medium text-gray-600 text-center mb-8">
          Fondator & CEO Onixon
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          ullamcorper urna. Proin euismod sapien ut magna aliquam mattis. Nunc
          suscipit, nisl quis viverra feugiat, felis elit pellentesque nisi, in
          feugiat libero purus ac nisi.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
