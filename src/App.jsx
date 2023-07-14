import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Oferta from "./components/Oferta";
import CumLucram from "./components/CumLucram";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <CumLucram />
      <Pricing />
      <Oferta />
      <Footer />
    </main>
  );
}

export default App;
