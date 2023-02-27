import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaStarOfLife } from "react-icons/fa";
import "./pricing.css";

const pricing = () => {
  return (
    <div className="thc__pricing-wrapper section__padding">
      <div className="thc__pricing-container">
        <div className="thc__pricing-header">
          <p>Membership</p>
          <h3 className="gradient__text">
            <FaRupeeSign className="gradient__text" /> <span>100</span>
          </h3>
        </div>
        <div className="thc__pricing-features">
          <h3>Features</h3>
          <ul>
            <li>
              <TiTick className="tick" size="1.5rem" /> One-year membership of
              the club.
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Training Sessions and
              Mock interviews.
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Online tech resources:
              docs, blogs, talks.
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Networking Opportunities
            </li>
          </ul>
        </div>
      </div>
      <div className="thc__pricing-container">
        <div className="thc__pricing-header">
          <p>Tech Talks</p>
          <h3 className="gradient__text">
            <FaRupeeSign /> <span>200</span>
          </h3>
          <span>* per session</span>
        </div>
        <div className="thc__pricing-features">
          <h3>Features</h3>
          <ul>
            <li>
              <TiTick className="tick" size="1.5rem" /> Attend live sessions
              either online or offline
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Access to the Session
              Recording
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Q&A Session with the
              Speaker
            </li>
            <li>
              <TiTick className="tick" size="1.5rem" /> Guest Speakers and
              Industry Experts
            </li>
          </ul>
        </div>
      </div>
      <div className="thc__pricing-disclaimer">
        <h3>
          Disclaimer: Amount collected will be solely utilized for the below
          activities:
        </h3>
        <div className="thc__pricing-disclaimer__points">
          <div>
            <FaStarOfLife className="star" />
            <p>
              Maintaining the website and covering the associated domain
              charges.
            </p>
          </div>
          <div>
            <FaStarOfLife className="star" />
            <p>
              Purchasing club goodies, such as T-shirts, mugs, and bottles, to
              inspire and engage students.
            </p>
          </div>
          <div>
            <FaStarOfLife className="star" />
            <p>
              Setting up the laboratory with the latest tools and procuring
              necessary licenses to further the club's mission of promoting
              cyber security education and awareness.
            </p>
          </div>
          <div>
            <FaStarOfLife className="star" />
            <p>
              Please be advised that if a member engages in misconduct leading
              to termination of their membership, no refunds will be granted for
              any remaining membership period.
            </p>
          </div>
          <div>
            <FaStarOfLife className="star" />
            <p>
              Remuneration to guest speakers may be provided, as agreed by club
              admins and the guest speaker
            </p>
          </div>
          <h3>
            Please note that any unused funds will be reserved for future club
            activities, and will not be distributed among individuals.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default pricing;
