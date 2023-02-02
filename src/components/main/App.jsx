import React from "react";
import {
  Navbar,
  Header,
  // Feature,
  // Brand,
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
      {/* <Brand /> */}
      <WhatCyberSec />
      {/* <Feature /> */}
      <OurGoals />
      <OurTeam />
    </div>
  );
};

export default App;
