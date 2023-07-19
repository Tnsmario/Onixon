import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";
import { Section } from "./Animation";

const Result = () => {
  return (
    <p className="text-white">
      Cererea a fost înregistrată. Urmează să vă contactăm în cel mai scurt
      timp.
    </p>
  );
};

function Oferta() {
  const [rezultat, showRezultat] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ee2eih9",
        "template_vzwvcsk",
        form.current,
        "LC_IczCcReVzDNtKN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showRezultat(true);
  };

  // hide result
  setTimeout(() => {
    showRezultat(false);
  }, 10000);

  return (
    <section className="bg-[#1F2937] py-20" id="requestOffer">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 animation">
          <div className="flex flex-col md:flex-row space-x-8">
            <div className="md:w-3/5 flex flex-col mx-auto ">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Cere ofertă
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Nume*
                    </label>
                    <input
                      required
                      className="appearance-none block w-full bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="name"
                      name="user_name"
                      type="text"
                      placeholder="Popescu Cristian"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email*
                    </label>
                    <input
                      required
                      className="appearance-none block w-full bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="cristianpopescu@exemplu.com"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Detalii proiect*
                    </label>
                    <textarea
                      required
                      className="no-resize appearance-none block w-full bg-[#fff] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      name="message"
                      placeholder="Un website simplu despre..."
                    ></textarea>
                    <div className="radio-buttons">
                      <h2 className="underline-item block uppercase tracking-wide text-white text-sm font-bold mb-2">
                        Servicii
                      </h2>
                      <div className="btns-wraper pl-8 flex flex-wrap justify-between text-white lg:my-6 max-md:px-8 ">
                        <div className="stack1 ">
                          <input
                            type="radio"
                            id="ecommerce"
                            name="type_of_website"
                            value="Magazin Online"
                          />
                          <label className="label mr-4" htmlFor="ecommerce">
                            Magazin online
                          </label>
                        </div>
                        <div className="stack2 max-md:mt-auto">
                          <input
                            type="radio"
                            id="landing"
                            name="type_of_website"
                            value="Website de Prezentare O Pagina"
                          />
                          <label className="label" htmlFor="landing">
                            Website simplu
                          </label>
                        </div>
                        <div className="stack3 max-md:mt-auto">
                          <input
                            type="radio"
                            id="landing_multiple"
                            name="type_of_website"
                            value="Website de Prezentare Pagini Multiple"
                          />
                          <label className="label" htmlFor="landing_multiple">
                            Website cu pagini multiple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      type="submit"
                      value="Trimite cerere"
                      className="bg-[#F4AD15] text-[#1F2937] cursor-pointer font-bold py-3 px-4 rounded"
                    />
                  </div>
                  <div>{rezultat ? <Result /> : null}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Oferta;
