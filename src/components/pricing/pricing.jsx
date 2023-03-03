import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaStarOfLife } from "react-icons/fa";
import "./pricing.css";

const pricingData = [
  {
    fees: 100,
    title: "Membership",
    feature1: `One-year membership of
    the club.`,
    feature2: `Training Sessions and
    Mock interviews.`,
    feature3: `Online tech resources:
    docs, blogs, talks.`,
    feature4: `Networking Opportunities`,
  },
  {
    fees: 200,
    title: "Tech Talks",
    feature1: `Attend live sessions
    either online or offline.`,
    feature2: `Access to the Session
    Recordings.`,
    feature3: `Q&A Session with the
    Speaker.`,
    feature4: `Guest Speakers and
    Industry Experts.`,
  },
];

const disclaimerPoints = [
  `Maintaining the website and covering the associated domain
charges.`,
  `Purchasing club goodies, such as T-shirts, mugs, and bottles, to
inspire and engage students.`,
  `Setting up the laboratory with the latest tools and procuring
necessary licenses to further the club's mission of promoting
cyber security education and awareness.`,
  `Please be advised that if a member engages in misconduct leading
to termination of their membership, no refunds will be granted for
any remaining membership period.`,
  `Please be advised that if a member engages in misconduct leading
to termination of their membership, no refunds will be granted for
any remaining membership period.`,
  `Remuneration to guest speakers may be provided, as agreed by club
admins and the guest speaker.`,
];

const pricing = () => {
  return (
    <div className="thc__pricing-wrapper section__padding">
      {pricingData.map((pricing, index) => {
        return (
          <div className="thc__pricing-container">
            <div className="thc__pricing-header" key={index}>
              <p>{pricing.title}</p>
              <h3 className="gradient__text">
                <FaRupeeSign className="gradient__text" />
                <span>{pricing.fees}</span>
              </h3>
            </div>
            <div className="thc__pricing-features">
              <h3>Features</h3>
              <ul>
                <li>
                  <TiTick className="tick" size="1.5rem" /> {pricing.feature1}
                </li>
                <li>
                  <TiTick className="tick" size="1.5rem" /> {pricing.feature2}
                </li>
                <li>
                  <TiTick className="tick" size="1.5rem" /> {pricing.feature3}
                </li>
                <li>
                  <TiTick className="tick" size="1.5rem" /> {pricing.feature4}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      <div className="thc__pricing-disclaimer">
        <h3>
          Disclaimer: Amount collected will be solely utilized for the below
          activities:
        </h3>
        <div className="thc__pricing-disclaimer__points">
          {disclaimerPoints.map((point, index) => {
            return (
              <div key={index}>
                <FaStarOfLife className="star" />
                <p>{point}</p>
              </div>
            );
          })}
        </div>
        <h3>
          Please note that any unused funds will be reserved for future club
          activities, and will not be distributed among individuals.
        </h3>
      </div>
    </div>
  );
};

export default pricing;
