import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";
import logonavbar from "../../assets/logonavbar.png";
import "../../styles/button.css"
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
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
            Happy<i className="fas fa-paw"></i>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
        {button && (
          <Button buttonStyle="btn--outline">
            Contact us
          </Button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
