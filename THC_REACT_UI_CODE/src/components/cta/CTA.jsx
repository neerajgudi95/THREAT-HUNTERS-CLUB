import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => {
  return (
    <div className="thc__cta">
      <div className="thc__cta-content">
        <h3>Join the club today and explore various opportunities</h3>
      </div>
      <div className="thc__cta-btn">
        <Link to="/" /*{"/register"}*/ className="join-btn">
          Join
        </Link>
      </div>
    </div>
  );
};

export default CTA;
