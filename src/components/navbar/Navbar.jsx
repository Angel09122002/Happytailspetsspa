import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";
import logonavbar from "../../assets/logonavbar.png";
import menuactive from "../../assets/menuactive.png"
import "../../styles/button.css";
import { Link } from "react-scroll";
import { Button } from "../button/Button";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobilemenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <img
          src={logonavbar}
          alt="Logo-navbar"
          style={{ width: "150px", height: "auto" }}
        />

        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
            <p>Happy Tails Pets Spa</p>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <img
            id="img-menuactive"
            src={menuactive}
            alt="Logo-navbar"
            style={{ width: "690px", height: "auto" }}
          />
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilemenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about us"
              className="nav-links"
              onClick={closeMobilemenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobilemenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links-mobile"
              onClick={closeMobilemenu}
            >
              Contact us
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Contact us</Button>}
      </nav>
    </>
  );
};

export default NavBar;
