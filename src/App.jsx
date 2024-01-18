import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Oferta from "./components/Oferta";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Pricing />
      <Oferta />
      <Footer />
    </main>
  );
}

export default App;
