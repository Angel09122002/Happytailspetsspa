import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact-items">
        <h1 className="contact-title">Contact your groomer</h1>
        <div className="contact-links">
          <div className="footer-phone">
            <a href="tel://(954) 296-7896">
              <span className="footer-iconPhone">
                <i className="fas fa-phone"></i>
              </span>
              (954) 296-7896
            </a>
          </div>
          <div className="footer-instagram">
            <a href="https://www.instagram.com/happytailspetsspa/">
              <span className="footer-iconInstagram">
                Instagram
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </div>
          <div className="footer-email">
            <a href="mailto:happytailspetsspa@gmail.com">
              Email Us
              <span className="footer-iconMail">
                <i className="fas fa-envelope"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
