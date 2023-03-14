import React from "react";

function Contact() {
  return (
    <section className="bg-[#1F2937] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-x-8">
          <div className="md:w-3/5 flex flex-col mx-auto ">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Cere Ofertă
            </h2>
            <form>
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
                    Mesaj
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    placeholder="Detalii Proiect"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <button className="bg-[#F4AD15] hover:bg-[#C58C11] text-white font-bold py-3 px-4 rounded">
                    Trimite
                  </button>
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
