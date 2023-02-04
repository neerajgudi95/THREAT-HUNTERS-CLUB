import React from "react";
import { Header, Possibilities, CTA, AboutUs } from "../export";
import "./mainpp.css";

const MainApp = () => {
  return (
    <div className="App">
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
