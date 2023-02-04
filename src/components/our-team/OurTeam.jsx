import React from "react";
import { membersList } from "../../utils/membersInfo";
import ProfileCard from "../profilecard/ProfileCard";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="thc__ourTeam-wrapper section__padding">
      <h3 className="gradient__text">OUR TEAM</h3>
      <div className="thc__ourTeam-container">
        {membersList.map((member, index) => (
          <ProfileCard
            key={`${member.name}-${index}`}
            name={member.name}
            roleAtClub={member.roleAtClub}
            designation={member.designation}
            image={member.image}
            description={member.description}
          />
        ))}

        {/* <ProfileCard
          name={members[0].name}
          roleAtClub={members[0].roleAtClub}
          designation={members[0].designation}
          image={members[0].image}
          description={members[0].description}
        />
        <ProfileCard
          name={members[1].name}
          roleAtClub={members[1].roleAtClub}
          designation={members[1].designation}
          image={members[1].image}
          description={members[1].description}
        />
        <ProfileCard
          name={members[2].name}
          roleAtClub={members[2].roleAtClub}
          designation={members[2].designation}
          image={members[2].image}
          description={members[2].description}
        />
        <ProfileCard
          name={members[3].name}
          roleAtClub={members[3].roleAtClub}
          designation={members[3].designation}
          image={members[3].image}
          description={members[3].description}
        /> */}
      </div>
    </div>
  );
};
export default OurTeam;
