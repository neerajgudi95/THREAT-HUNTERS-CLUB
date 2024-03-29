import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/earth.png";
import "./Navbar.css";
// import { useUserContext } from "../../../GlobalContexts/UserContextProvider";
import { useToken } from "../../../utils/custom-hooks/useToken";
import useUser from "../../../utils/custom-hooks/useUser";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [token] = localStorage.getItem("token");
  const [token, setToken] = useToken();
  const { user } = useUser();
  // console.log("BELOW DECLARATION", user);
  // const token = localStorage.getItem("token");

  const NavMenu = (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            onClick={() => setToggleMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/what-is-cyber-sec"
            onClick={() => setToggleMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            WhatCyberSec
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/club-goals"
            onClick={() => setToggleMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Our Goals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            onClick={() => setToggleMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            onClick={() => setToggleMenu(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Gallery
          </NavLink>
        </li>

        {token && user.paymentStatus && user.paymentStatus === true ? (
          <li>
            <Link
              className="thc__navbar-links-btn thc__navbar-links_login"
              to="/dashboard/home"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className="thc__navbar-links-btn thc__navbar-links_login"
              to="/login"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Login
            </Link>
          </li>
        )}
        <li>
          <Link
            to="/register"
            className="thc__navbar-links-btn thc__navbar-links_join"
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            Join
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <div className="thc__navbar gradient__bg">
      <div className="thc__navbar-links">
        <Link to="/">
          <div className="thc__navbar-links_logo">
            <img src={logo} alt="logo" width={50} height={50} />
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
