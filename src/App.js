import React from "react";
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <React.Fragment>
          <Navbar />
          <Home/> 
          <About/>
    </React.Fragment>
  );
}

export default App;
