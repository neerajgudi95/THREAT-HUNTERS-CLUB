import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./profilecard.css";

const ProfileCard = ({
  name,
  designation,
  image,
  description,
  roleAtClub,
  cover,
  linkedIn,
  gmail,
}) => {
  return (
    <div className="thc__profile-card">
      <div
        className="thc__profile-cover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <img
          src={image}
          className="thc__profile-photo"
          alt="profile_img"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="thc__profile-name">{name}</h3>
        <p className="thc__profile-designation">{designation}</p>
        <p className="thc__profile-desc">{description}</p>
      </div>
      <div className="thc__profile-icons">
        <ul>
          <li>
            <a href={linkedIn} target="_blank">
              <BsLinkedin
                className="thc__profile-icon__link linkedin"
                size="1.5em"
              />
            </a>
          </li>
          <li>
            <a
              href={`https://mail.google.com/mail/u/1/?view=cm&to=${gmail}`}
              target="_blank"
            >
              <SiGmail className="thc__profile-icon__link gmail" size="1.5em" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
