import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo/flaticon-removebg-preview.png";
import logo from "../../assets/earth.png";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const NavMenu = (
    <>
      <ul>
        <li>
          <NavLink to="/" onClick={() => setToggleMenu(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/what-is-cyber-sec" onClick={() => setToggleMenu(false)}>
            WhatCyberSec
          </NavLink>
        </li>
        <li>
          <NavLink to="/club-goals" onClick={() => setToggleMenu(false)}>
            Our Goals
          </NavLink>
        </li>
        <li>
          <NavLink to="/our-team" onClick={() => setToggleMenu(false)}>
            Our Team
          </NavLink>
        </li>
        {/* <li>
          <Link
            to="/login"
            className="thc__navbar-links-btn thc__navbar-links_login"
            onClick={() => setToggleMenu(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="thc__navbar-links-btn thc__navbar-links_join"
            onClick={() => setToggleMenu(false)}
          >
            Join
          </Link>
        </li> */}
      </ul>
    </>
  );

  return (
    <div className="thc__navbar gradient__bg">
      <div className="thc__navbar-links">
        <Link to="/">
          <div className="thc__navbar-links_logo">
            <img src={logo} alt="logo" />
            <div className="thc__navbar-links_brand">
              <p>THREAT</p>
              <p>HUNTERS</p>
            </div>
          </div>
        </Link>
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
