import React from "react";
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Cards from "./components/services/Cards";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <React.Fragment>
          <Navbar />
          <Home/>
          <About/>
          <Cards/>
          <Contact/>
    </React.Fragment>
  );
}

export default App;
