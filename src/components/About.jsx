import React from "react";

const About = () => {
  return (
    <section className="bg-[#1F2937] py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#F4AD15] sm:text-4xl sm:leading-10 mb-8">
          Despre Noi
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              Povestea Noastră
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              eleifend dui vel diam aliquet, id facilisis purus bibendum. Sed ut
              elit vel enim tincidunt volutpat. Sed vitae arcu id ante blandit
              placerat. Aliquam nec velit vel arcu hendrerit venenatis.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Echipă</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              eleifend dui vel diam aliquet, id facilisis purus bibendum. Sed ut
              elit vel enim tincidunt volutpat. Sed vitae arcu id ante blandit
              placerat. Aliquam nec velit vel arcu hendrerit venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
