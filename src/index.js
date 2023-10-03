import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Cards from "./components/services/Cards";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <div>
      <Home />
      <About />
      <Cards />
      <Contact />
    </div>
  </React.StrictMode>
);
