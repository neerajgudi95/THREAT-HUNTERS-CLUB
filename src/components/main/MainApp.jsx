import React from "react";
import { Header, Possibilities, CTA, AboutUs } from "../export";
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
