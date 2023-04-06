import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Oferta from "./components/Oferta";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <AboutMe />
      <Pricing />
      <Oferta />
      <Footer />
    </main>
  );
}

export default App;
