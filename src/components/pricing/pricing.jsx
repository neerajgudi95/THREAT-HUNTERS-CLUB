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
          <h3>
            <FaRupeeSign /> 100
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
              <TiTick className="tick" size="1.5rem" /> Workshops and Training
              Sessions.
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
          <h3>
            <FaRupeeSign /> 200
          </h3>
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
          Amount collected will be solely utilized for the below activities:
        </h3>
        <p>
          <FaStarOfLife
            size={"1.2em"}
            color="red"
            style={{ marginRight: "10px" }}
          />
          To maintain the website and the domain charges.
        </p>
        <p>
          <FaStarOfLife
            size={"1.2em"}
            color="red"
            style={{ marginRight: "10px" }}
          />
          To buy club goodies to inspire students e.g., T-shirt, Mug, Bottle
          etc.
        </p>
        <p>
          <FaStarOfLife
            size={"1.2em"}
            color="red"
            style={{ marginRight: "10px" }}
          />
          To setup the lab and to procure latest tools and licenses.
        </p>
      </div>
    </div>
  );
};

export default pricing;
