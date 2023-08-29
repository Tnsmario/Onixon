import React from "react";
import { Section } from "./Animation";
import "../assets/css/Pricing.css";

function Pricing() {
  return (
    <section className=" bg-[#1F2937] py-20" id="prices">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#F4AD15] text-center mb-10">
            Servicii
          </h2>
          <div className="card-wraper">
            <div className="card-container text-center bg-white ">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.875rem] h-[1.875rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </div>

              <h3 className="service-title">CONTENT WRITING</h3>
              <p className="parag">
                Suntem alchimiștii cuvintelor! Transformăm ideile în conținut
                captivant care face concurența să râcâie de invidie. De la
                articole până la postări pe rețelele de socializare, dăm viață
                cuvintelor într-un stil unic și amuzant. Hai să punem un strop
                de "HAHA" în conținutul tău.
              </p>
            </div>
            <div className="card-container text-center bg-white">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.875rem] h-[1.875rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="service-title">WEB DEVELOPMENT</h3>
              <p className="parag">
                Construim site-uri web mai rapide decât se încălzește pizza
                livrată. Codul nostru este atât de 'cool' încât pinguinii ar
                face "flip". Dacă site-ul tău e doar o colecție de bug-uri,
                suntem aici să le transformăm în 'caracteristici inovatoare'.
                Hai să transformăm ideile tale în site-uri senzaționale, fără a
                părăsi scaunul comod!
              </p>
            </div>
            <div className="card-container text-center bg-white">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.875rem] h-[1.875rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                </svg>
              </div>
              <h3 className="service-title">UI / UX</h3>
              <p className="parag">
                UI/UX-ul nostru este ca un cocktail bine amestecat, un strop de
                stil, o notă de intuitivitate și o zâmbetă sigură. Hai să dăm un
                twist captivant site-ului tău, suntem aici să facem fiecare
                interacțiune să conteze și să lase amprenta!
              </p>
            </div>
            <div className="card-container text-center bg-white">
              <div className="svg-wraper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.875rem] h-[1.875rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="service-title">MENTENANȚĂ WEB</h3>
              <p className="parag">
                Suntem ca "echipa de întreținere" pentru site-ul tău, dar nu
                îmbrăcați în salopete! De la "fix-uri" rapide la "curățenia de
                primăvară" a codului, suntem aici să ne asigurăm că site-ul tău
                strălucește și rulează ca uns. Cu noi, nu trebuie să te
                îngrijorezi de erori sau de aspectul dezordonat, ne ocupăm de
                asta ca niște adevărați "super-eroi digitali".
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Pricing;
