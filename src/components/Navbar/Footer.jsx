import React from "react";
import logo from "../../assets/logo/flaticon-removebg-preview.png";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="thc__footer section__padding">
      <div className="thc__footer-heading">
        <h3 className="gradient__text">Hunt.Kill.Quarantine</h3>
      </div>
      <div className="thc__footer-links">
        <div className="thc__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="thc__footer-links_div">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a href="#">
                <BsInstagram size={"1.5em"} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/threat-hunters/">
                <BsLinkedin size={"1.5em"} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter size={"1.5em"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="thc__footer-copywrite">
        <ul>
          <li>
            <Link to="/club-privacy">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/club-privacy">Privacy and Policy</Link>
          </li>
        </ul>
        <p>Developed by Neeraj Gudi and team</p>
      </div>
      <p>© {currentYear} THC - All rights reserved</p>
    </div>
  );
};

export default Footer;
