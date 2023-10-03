import React, { useState } from "react";

import "../../styles/navbar.css";
import logonavbar from "../../assets/logonavbar.png";
import "../../styles/button.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobilemenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="Logo">
        <img
          src={logonavbar}
          alt="Logo-navbar"
          style={{ width: "150px", height: "auto" }}
        />
        <div className="navbar-container">
          <div
            to="/"
            spy={true}
            smooth={50}
            offset={50}
            duration={500}
            className="navbar-logo"
            onClick={closeMobilemenu}
          >
            <p>Happy Tails Pets Spa</p>
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-ul">
          <li className="nav-item">
            <a
              href="#hero"
              spy={true}
              smooth={50}
              offset={50}
              duration={500}
              className="nav-links"
              onClick={closeMobilemenu}
            >
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#MainContent"
              spy={true}
              smooth={50}
              offset={50}
              duration={500}
              className="nav-links"
              onClick={closeMobilemenu}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#services"
              spy={true}
              smooth={50}
              offset={50}
              duration={500}
              className="nav-links"
              onClick={closeMobilemenu}
            >
              Services
            </a>
          </li>

          <li className="nav-item">
            <div
              to="/contact"
              spy={true}
              smooth={50}
              offset={50}
              duration={500}
              className="nav-links"
              onClick={closeMobilemenu}
            >
              Contact us
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
