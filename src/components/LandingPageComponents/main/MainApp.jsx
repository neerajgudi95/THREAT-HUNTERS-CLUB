import React from "react";
import Header from "../Navbar/Header";
import Possibilities from "../possibilities/Possibilities";
import CTA from "../cta/CTA";
import AboutUs from "../aboutUs/AboutUs";

import "./mainApp.css";

const MainApp = () => {
  return (
    <div className="thc__app">
      <div className="gradient__bg">
        <Header />
      </div>
      <AboutUs />
      <CTA />
      <Possibilities />
    </div>
  );
};

export default MainApp;
