import React from "react";
import "./profilecard.css";

const ProfileCard = ({ name, designation, image, description }) => {
  return (
    <div className="thc__profile">
      <div className="thc__profile-header">
        <div className="thc__profile-header__nameInfo">
          <h3>{name}</h3>
          <p>-{designation}</p>
        </div>
      </div>
      <img src={image} alt="Nikhil Inganal" />
      <div className="thc__profile-about">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
