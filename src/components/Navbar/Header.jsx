import React from "react";
import "./Header.css";
import shield from "../../assets/bgimages/shield-bg.png";
const Header = () => {
  return (
    <div className="thc__header section__padding" id="home">
      <div className="thc__header-content">
        <span>The Club,</span>
        <h1 className="gradient__text">Threat Hunters</h1>
        <p>
          Join our cyber security club to gain knowledge and experience in this
          field, as well as network with other like-minded individuals.
        </p>
      </div>
      <div className="thc__header-img">
        <img src={shield} alt="shield-bg" />
      </div>
    </div>
  );
};

export default Header;
