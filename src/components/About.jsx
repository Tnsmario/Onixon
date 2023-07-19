import React from "react";
import "../assets/css/About.css";
import { Section } from "./Animation";

const About = () => {
  return (
    <section className="bg-[#1F2937] py-14" id="about">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-extrabold text-[#F4AD15] sm:text-4xl sm:leading-10 mb-8">
            Despre noi
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2 bg-[#fff] rounded-md py-5 px-5 max-md:my-5 desc misiune">
              <h3 className="text-2xl font-bold  mb-4">Misiune</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Misiunea noastră constă în a ajuta afacerile să atingă succesul
                în mediul online, oferind soluții de dezvoltare web de înaltă
                calitate. Ne angajăm să creăm site-uri web inovatoare și ușor de
                utilizat, care stimulează interacțiunea valoroasă și susțin
                creșterea durabilă.
              </p>
            </div>
            <div className="md:w-1/2 bg-[#fff] rounded-md py-5 px-5">
              <h3 className="text-2xl font-bold mb-4">Echipă</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ca o afacere de dezvoltare web specializată, echipa noastră este
                condusă de un programator talentat și dedicat. Deși suntem o
                echipă compactă, punem accentul pe furnizarea serviciilor de
                dezvoltare web de cea mai înaltă calitate, bazate pe expertiză
                tehnică solidă.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default About;
