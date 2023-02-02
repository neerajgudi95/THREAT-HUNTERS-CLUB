import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/flaticon-removebg-preview.png";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const NavMenu = (
    <>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">WhatCyberSec</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Our Goals</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <Link
            to="/login"
            className="thc__navbar-links-btn thc__navbar-links_login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="thc__navbar-links-btn thc__navbar-links_join"
          >
            Join
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <div className="thc__navbar">
      <div className="thc__navbar-links">
        <div className="thc__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="thc__navbar-links_container">{NavMenu}</div>
        <div className="thc__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              onClick={() => setToggleMenu(false)}
              style={{ cursor: "pointer" }}
              color="#fff"
              size={27}
            />
          ) : (
            <RiMenu3Line
              onClick={() => setToggleMenu(true)}
              style={{ cursor: "pointer" }}
              color="#fff"
              size={27}
            />
          )}
          {toggleMenu && (
            <div className="thc__navbar-menu_container scale-up-center">
              <div className="thc__navbar-menu_container-links">{NavMenu}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
