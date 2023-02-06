import React from "react";
import "./profilecard.css";

const ProfileCard = ({ name, designation, image, description, roleAtClub }) => {
  return (
    <div className="thc__profile">
      <div className="thc__profile-header">
        <div className="thc__profile-header__nameInfo">
          <h3>{name}</h3>
          <p className="role">- {roleAtClub}</p>
          <p>- {designation}</p>
        </div>
      </div>
      <picture>
        <source srcset={image} type="image/webp" />
        <img src="image.jpg" />
      </picture>
      <div className="thc__profile-about">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
