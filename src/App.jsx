import React from "react";
import { Link } from "react-scroll";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Contact />
      <Pricing />
      <div className="h-[4000px]"></div>
    </main>
  );
}

export default App;
