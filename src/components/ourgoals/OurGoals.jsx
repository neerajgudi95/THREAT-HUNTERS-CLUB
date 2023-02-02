import React from "react";
import { Feature } from "../export";
import "./ourgoals.css";
const OurGoals = () => {
  const ourGoals = [
    {
      title: "Career Guidance, Mentoring",
      text: "Empowering members towards their professional aspirations through personalized career guidance and mentoring.",
    },
    {
      title: "Tech Talks",
      text: "Tech talks on Cybersecurity including latest attacks and trends with POC.",
    },
    {
      title: "Campaigns",
      text: "Conducting security awareness campaigns like phishing etc., which makes them ready for corporate world.",
    },
    {
      title: "Engagement",
      text: "Encouraging the students to participate in activities like malware analysis and threat hunting by giving incentives like goodies etc.",
    },
  ];

  return (
    <div className="thc__ourgoals section__padding">
      <div className="thc__ourgoals-heading">
        <h2 className="gradient__text">OUR CLUB GOALS.</h2>
      </div>
      <div className="thc__ourgoals-container">
        {ourGoals.map((goal, index) => (
          <Feature title={goal.title} text={goal.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
