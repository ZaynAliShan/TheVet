import React from "react";
import the_vet_logo from "../assets/img/TheVet (3).png";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="footer__logo">
                <img src={the_vet_logo} alt="The Vet Logo" />
              </div>
              <p className="footer__description">
                The Vet is a new kind of veterinary experience that works better
                for everyone: the vets, the pets, and the pet parents. With
                proprietary technology that helps prevent, diagnose, and treat
                medical conditions, we are able to deliver clinic-level pet care
                without the clinic.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <div className="footer__newsletter">
                <h4 className="footer__title">Subscribe to Our Newsletter</h4>
                <form className="footer__newsletter-form">
                  <input
                    type="email"
                    name="EMAIL"
                    id="newsletter-form-email"
                    placeholder="Email Address"
                    className="footer__newsletter-input"
                    required
                  />
                  <Link to="/login">
                  <button
                    type="button"
                    style={{
                      color: "#fff",
                      backgroundImage:
                        "linear-gradient(to left, #559af3, #6314f3, #559af3)",
                    }}
                    className="footer__newsletter-submit"
                  >
                    LOGIN
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="footer__copy-right">
                &copy; {new Date().getFullYear()} All rights reserved | The Vet
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer__social">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fas fa-globe"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
