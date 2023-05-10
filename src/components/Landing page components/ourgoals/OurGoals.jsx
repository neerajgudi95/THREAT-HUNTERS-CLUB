import React from "react";
import { Feature } from "../../export";
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
    <div className="thc__landingPage">
      <div className="thc__ourgoals-wrapper section__padding">
        {
          <div className="thc__ourgoals">
            
          </div>
          /* <div className="thc__ourgoals-heading">
            <h2 className="gradient__text">GOALS</h2>
          </div>
          <div className="thc__ourgoals-container">
            {ourGoals.map((goal, index) => (
              <Feature title={goal.title} text={goal.text} key={index} />
            ))}
        </div>
        <div className="thc__ourgoals-disclaimer section__padding">
          <h3>Note</h3>
          <p>
            Please note that our Cybersecurity Club is run by a group of
            passionate professionals and is not associated with any
            public/private organizations.
            <br />
            <br />
            While we would love to help out students by guiding them in the
            process of upskilling and meeting industry standards, we do not
            guarantee to bring in companies for placements or setting up
            students for internships.
            <br />
            <br /> Our primary objective is to provide you with the knowledge
            and skills required to navigate the corporate world with confidence.
            We shall remain committed to our objective and continue to aid
            students on their path to becoming cybersecurity professionals by
            offering educational resources, networking opportunities, and
            mentorship programs.
          </p>
        </div> */
        }
      </div>
    </div>
  );
};

export default OurGoals;
