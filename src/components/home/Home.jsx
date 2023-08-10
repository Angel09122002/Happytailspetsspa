import React from 'react'
import "../../styles/home.css"
import bathhome from "../../assets/bathhome.jpg"
import scissors from "../../assets/scissors.png"
import { Button } from '../button/Button'



const Home = () => {
  return (
    <div className="hero-container">
      <h1>Enhance your furry companion's apperance </h1>
      <p>with comfort and care!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Your Grommer
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          See our magic  <i class="fa-brands fa-instagram"></i>
        </Button>
      </div>
    </div>
  );
}

export default Home
