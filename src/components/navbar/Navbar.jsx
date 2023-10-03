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
            <a href="#hero" className="nav-links" onClick={closeMobilemenu}>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#MainContent"
              className="nav-links"
              onClick={closeMobilemenu}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#Cards" className="nav-links" onClick={closeMobilemenu}>
              Services
            </a>
          </li>

          <li className="nav-item">
            <a href="#footer" className="nav-links" onClick={closeMobilemenu}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
