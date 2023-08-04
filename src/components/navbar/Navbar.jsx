import React, { useState } from "react";
import "../../styles/navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logonavbar from "../../assets/logonavbar.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About us",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <nav className="top-bar">
      <a id="img" href="/">
        <img  src={logonavbar} alt="Logo-navbar" width={150} style={{ width: "150px", height: "auto" }} />
      </a>
      <a href="/" className="title-navbar">HappyTailsPetsSpa</a>

      <div>
        <ul className="navbar">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="burgericon1"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="onlclick"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="burger">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="openburger"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={400}
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
