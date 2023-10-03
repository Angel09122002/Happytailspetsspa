import React from "react";
import "../../styles/home.css";
import { Button } from "../button/Button";

const Home = () => {
  return (
    <div className="hero-container" id="hero">
      <h1>Enhance your furry companion's apperance </h1>
      <p>with comfort and care!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Your Groomer
        </Button>
        <button className="btn-instagram">
          <a
            href="https://www.instagram.com/happytailspetsspa/"
            target="blanck"
          >
            Check our magic
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
