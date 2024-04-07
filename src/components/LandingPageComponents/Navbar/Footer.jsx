import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../../assets/earth.png";
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
        <Link to="/">
          <div className="thc__footer-links_logo">
            <img src={logo} alt="logo" />
            <div className="thc__footer-links_brand">
              <p>THREAT</p>
              <p>HUNTERS</p>
            </div>
          </div>
        </Link>
        <div className="thc__footer-links_div">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/threat_hunters_club/"
                target="_blank"
                aria-label="instagram"
              >
                <BsInstagram size={"1.5em"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/threat-hunters/"
                target="_blank"
                aria-label="linkedin"
              >
                <BsLinkedin size={"1.5em"} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/hunters_threat"
                target="_blank"
                aria-label="twitter"
              >
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
          <li>
            <Link to="/refund-policy">Refund Policy</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
        </ul>
        <p>Developed by team at Threat Hunters Club</p>
      </div>
      <p>
        © {currentYear} <strong>threathuntersclub.tech</strong> - All rights
        reserved
      </p>
    </div>
  );
};

export default Footer;
