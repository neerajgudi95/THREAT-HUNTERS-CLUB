import React from "react";
import { membersList } from "../../../utils/membersInfo";
import ProfileCard from "../profilecard/ProfileCard";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="thc__landingPage">
      <div className="thc__ourTeam-wrapper section__padding">
        <h3 className="gradient__text">OUR TEAM</h3>
        <div className="thc__ourTeam-container">
          {membersList.map((member, index) => (
            <ProfileCard
              key={`${member.name}-${index}`}
              name={member.name}
              roleAtClub={member.roleAtClub}
              cover={member.cover}
              designation={member.designation}
              image={member.image}
              description={member.description}
              linkedIn={member.connectLinks[0]}
              gmail={member.connectLinks[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
