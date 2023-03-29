import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";

function Contact() {
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
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-[#1F2937] py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col md:flex-row space-x-8">
          <div className="md:w-3/5 flex flex-col mx-auto ">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Cere Ofertă
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Nume*
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Cristian Popescu"
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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="cristanpopescu@exemplu.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Detalii Proiect
                  </label>
                  <textarea
                    required
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    name="message"
                    placeholder="Detalii Proiect"
                  ></textarea>
                  <div className="radio-buttons">
                    <h2 className="underline-item block uppercase tracking-wide text-white text-sm font-bold mb-2">
                      Servicii dorite
                    </h2>
                    <div className="btns-wraper flex flex-wrap justify-evenly text-white lg:my-4">
                      <div className="stack1">
                        <input
                          type="radio"
                          id="ecommerce"
                          name="type_of_website"
                          value="Magazin Online"
                        />
                        <label className="label" htmlFor="ecommerce">
                          Magazin Online
                        </label>
                      </div>
                      <div className="stack2">
                        <input
                          type="radio"
                          id="landing"
                          name="type_of_website"
                          value="Website de Prezentare"
                        />
                        <label className="label" htmlFor="landing">
                          Website de Prezentare
                        </label>
                      </div>
                      <div className="stack3">
                        <input
                          type="checkbox"
                          id="design"
                          name="type_of_website"
                          value="Design Personalizat"
                        />
                        <label className="label" htmlFor="design">
                          Design Personalizat
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
                    value="Cere Oferta"
                    className="bg-[#F4AD15] hover:bg-[#C58C11] cursor-pointer text-white font-bold py-3 px-4 rounded"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
