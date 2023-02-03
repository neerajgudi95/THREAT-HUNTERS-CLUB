import React from "react";
import profile from "../../assets/profile.jpeg";
import profile2 from "../../assets/profile2.jpg";
import ProfileCard from "../profilecard/ProfileCard";
import "./OurTeam.css";
const OurTeam = () => {
  const members = [
    {
      name: "Nikhil Inganal",
      designation: "Senior Security Analyst",
      image: profile,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum tempora illo aspernatur ad sapiente, asperiores facere minima possimus nulla.",
    },
    {
      name: "Nihal Katti",
      designation: "Data Scientist",
      image: profile2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt commodi illum a delectus, asperiores reiciendis excepturi. Vel, velit earum doloremque perspiciatis, nostrum numquam culpa quibusdam mollitia optio corporis voluptatum modi",
    },
  ];

  return (
    <div className="thc__ourTeam-wrapper section__padding">
      <ProfileCard
        name={members[0].name}
        designation={members[0].designation}
        image={members[0].image}
        description={members[0].description}
      />
      <ProfileCard
        name={members[1].name}
        designation={members[1].designation}
        image={members[1].image}
        description={members[1].description}
      />
    </div>
  );
};
export default OurTeam;
