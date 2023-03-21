import React from "react";
import "./MarqueeElement.css";

const MarqueeElement = ({ marqEl }) => {
  return (
    <div className="thc__marqueeElement-wrapper">
      <div className="thc__marqueeElement-container">
        <img
          src={marqEl.logo}
          alt={marqEl.name}
          style={
            marqEl.name.includes("Nmap") ? { width: "60px" } : { width: "" }
          }
        />
        <p>{marqEl.name}</p>
      </div>
    </div>
  );
};

export default MarqueeElement;
