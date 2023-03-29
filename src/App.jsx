import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <AboutMe />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
