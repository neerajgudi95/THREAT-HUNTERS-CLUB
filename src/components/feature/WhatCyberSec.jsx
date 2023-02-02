import React from "react";
import Feature from "./Feature";

import "./whatcybersec.css";

const WhatCyberSec = () => {
  return (
    <div className="thc__whatCyberSec section__margin" id="whatCyberSec">
      <div className="thc__whatCyberSec-feature">
        <Feature
          title="What is Cyber Security"
          text="Cyber security is the practice of protecting computers, networks, and digital information from theft, damage, or unauthorized access. It involves implementing various measures and technologies to prevent cyber attacks and protect sensitive data."
        />
      </div>
      <div className="thc__whatCyberSec-heading">
        <h2 className="gradient__text">
          DISCOVER YOUR PASSION, EXPAND YOUR HORIZONS
        </h2>
        <p>VISION</p>
      </div>
      <div className="thc__whatCyberSec-features_container">
        <Feature
          title="Passion"
          text="To allow the students to follow their passion towards Cybersecurity."
        />
        <Feature
          title="Community"
          text="It helps one build community: Getting involved helps one discover with similar interests in technology."
        />
        <Feature
          title="Career"
          text="As a result of involvement, one will gain knowledge, experience and further career aspects"
        />
      </div>
    </div>
  );
};

export default WhatCyberSec;
