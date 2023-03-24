import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  let handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="bg-[#1F2937] py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col md:flex-row space-x-8">
          <div className="md:w-3/5 flex flex-col mx-auto ">
            <h2 className="text-3xl font-bold mb-8 text-center text-white bg-pink-500">
              Cere Ofertă
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Nume
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
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
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Detalii Proiect
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    name="message"
                    placeholder="Detalii Proiect"
                  ></textarea>
                  <div className="radio-buttons  bg-pink-500">
                    <div className="btns-wraper">
                      <div className="stack1">
                        <input
                          type="radio"
                          id="ecommerce"
                          value="Magazin Online"
                          onClick={handleClick}
                        />
                        <label htmlFor="ecommerce">Magazin Online</label>
                      </div>
                      <div className="stack2">
                        <input
                          type="radio"
                          id="landing"
                          value="Website de Prezentare"
                          onClick={handleClick}
                        />
                        <label htmlFor="landing">Website de Prezentare</label>
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
