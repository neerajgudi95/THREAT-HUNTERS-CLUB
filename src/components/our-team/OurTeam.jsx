import React from "react";
import profile from "../../assets/profile.jpeg";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="thc__ourTeam-wrapper section__padding">
      <div className="thc__ourTeam-profile">
        <div className="thc__ourTeam-profile__header">
          <div className="thc__ourTeam-profile__header-nameInfo">
            <h3>Nikhil Inganal</h3>
            <p>-Senior Security Analyst</p>
          </div>
        </div>
        <img src={profile} alt="Nikhil Inganal" />
        <div className="thc__ourTeam-profile__about">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            debitis, dolor explicabo neque provident, earum, amet quibusdam et
            tempore facilis quas harum esse magni voluptas illum rerum a dolore
            deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
