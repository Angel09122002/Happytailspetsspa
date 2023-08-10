import React from 'react'
import "../../styles/home.css"
import bathhome from "../../assets/bathhome.jpg"
import { Button } from '../button/Button'
const Home = () => {
  return (
    <div className="home-container">
      <img src={bathhome} alt="bathcome" />

      <div className="home-wrapper">
        <div className="home-container">
          <div className="Text-homeContainer">
            <p>
              <strong>
              Enhance your furry companion's appearance with comfort and care!
              </strong>
              
            </p>
          </div>
        </div>
        <Button buttonStyle="btn--outline">Contact Your Groomer</Button>
      </div>
    </div>
  );
}

export default Home
