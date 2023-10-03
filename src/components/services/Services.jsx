import React from "react";
import "../../styles/services.css";
import { Link } from "react-scroll";

const Services = (props) => {
  return (
    <>
      <li className="cards__item" id="services">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Services;
