import React from "react";
import "./possibilities.css";
import image from "../../assets/possibility.png";
const Possibilities = () => {
  return (
    <div className="thc__possibility section__padding">
      <div className="thc__possibility-img">
        <img src={image} alt="possibility image" />
      </div>
      <div className="thc__possibility-content">
        <h3>Empowerment.</h3>
        <h2 className="gradient__text">
          Enhancing members' knowledge and skills in identifying, analyzing, and
          mitigating cyber threats.
        </h2>
      </div>
    </div>
  );
};

export default Possibilities;
