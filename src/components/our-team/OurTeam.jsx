import React from "react";
import profile from "../../assets/profile.jpeg";
import profile2 from "../../assets/profile2.jpeg";
import profile3 from "../../assets/profile3.jpeg";
import ProfileCard from "../profilecard/ProfileCard";
import "./OurTeam.css";
const OurTeam = () => {
  const members = [
    {
      name: "Nikhil Inganal",
      designation: "Information Security Architect",
      image: profile,
      description:
        "I am certified expert in CCIE-SEC, OSWP, CEH,CCNA, CCNP, GCSA from Guardicore, OWASP, JNCIA, AZ900, API Security Architect, N+, A+, Wi-fu(Offensive Security Wireless Attacks) Routing Protocols( BGP, RIP, OSPF, MPLS) IPSEC.",
    },
    {
      name: "Vijeth K L",
      designation: "Security Analyst",
      image: profile3,
      description:
        "I am a cybersecurity professional with around 2 years of experience working as a Security Analyst at Akamai Technologies. My work primarily involves the consistent monitoring of state-of-the-art security tools to act on any threats and maintain the network security posture. Strengths: Email security, Malware analysis",
    },
    {
      name: "Nihal Katti",
      designation: "Data Scientist",
      image: profile2,
      description:
        "Currently a Graduate student pursuing my Master's in Data Science at the University of Koblenz-Landau at Koblenz . As part of the degree course work, I have worked on challenging courses such as Artificial Learning, Big Data, Network Theory and Web Semantics. ",
    },
  ];

  return (
    <div className="thc__ourTeam-wrapper section__padding">
      <h3 className="gradient__text">OUR TEAM</h3>
      <div className="thc__ourTeam-container">
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
        <ProfileCard
          name={members[2].name}
          designation={members[2].designation}
          image={members[2].image}
          description={members[2].description}
        />
      </div>
    </div>
  );
};
export default OurTeam;
