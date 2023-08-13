import React from "react";
import { Button } from "react-scroll";
import "../../styles/about.css";

const About = () => {
  return (
    <main role="main" id="MainContent" className="main-content">
      <div className="section-title">
        <section className="section-text">
          <div className="section-wrapper">
            <h1>From Furry to Fabulous</h1>
          </div>
          <div className="section-wrapper-subtitle">
            <h5>Specialized Doggy Spa Services ·Premium Grooming Care</h5>
          </div>
          <div className="about-wrap">
            <div className="brickOne-text">
              <h3>About Us: Experts in Mobile Pet Grooming</h3>
              <p>
                Welcome to Happy Tails Pets Spa, where the enchantment of mobile
                pet care comes to life. With extensive experience catering to
                various breeds and animal personalities, our highly skilled team
                ensures premium service and exceptional results. Backed by an
                unwavering commitment to animal well-being, our personalized
                approach guarantees that every pet, whether playful or timid,
                receives the care and affection they deserve.
              </p>
            </div>
            <div className="brickTwo-text">
              <h3>Commitment to Well-being and Quality</h3>
              <p>
                Our passion for pets drives everything we do. Our unwavering
                commitment to quality is reflected in every aspect of our
                services. We offer much more than simple beautification; we
                deliver a comprehensive experience that prioritizes the health,
                comfort, and happiness of your furry companions. By choosing us,
                you become a part of a community dedicated to exceptional pet
                care and attention. We are here to enhance and enrich the lives
                of the furry members of your family, eagerly anticipating the
                opportunity to provide each one with a premium treatment that
                celebrates their unique beauty and vitality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
