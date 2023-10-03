import React from "react";
import "../../styles/home.css";
import { Button } from "../button/Button";

const Home = () => {
  return (
    <div className="hero-container" id="hero">
      <h1>Enhance your furry companion's appearance</h1>
      <p className="sub-title">with comfort and care!</p>
      <div className="hero-btns">
        <a href="tel:(954)296-7896">
          <button className="btn-phone">Contact your Groomer</button>
        </a>

       
        <button className="btn-instagram">
          <a
            href="https://www.instagram.com/happytailspetsspa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check our magic
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
