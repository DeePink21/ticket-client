import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newslater from "./footer/Newslater";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <Newslater />
        <div className="container">
          <div className="footer-top">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/footer/footer-logo.png" alt="footer" />
              </Link>
            </div>
            <ul className="social-icons">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-google" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-area">
              <div className="left">
                <p>
                  Copyright © 2020.All Rights Reserved By{" "}
                  <a href="#0">Boleto </a>
                </p>
              </div>
              <ul className="links">
                <li>
                  <a href="#0">About</a>
                </li>
                <li>
                  <a href="#0">Terms Of Use</a>
                </li>
                <li>
                  <a href="#0">Privacy Policy</a>
                </li>
                <li>
                  <a href="#0">FAQ</a>
                </li>
                <li>
                  <a href="#0">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
