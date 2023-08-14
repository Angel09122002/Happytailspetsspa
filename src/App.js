import React from "react";
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <React.Fragment>
          <Navbar />
          <Home/> 
          <About/>
          <Services/>
    </React.Fragment>
  );
}

export default App;
