import React from "react";
import {
  Navbar,
  Header,
  Possibilities,
  CTA,
  WhatCyberSec,
  OurGoals,
  OurTeam,
} from "../../components/export";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatCyberSec />
      <OurGoals />
      <Possibilities />
      <CTA />
      <OurTeam />
    </div>
  );
};

export default App;
