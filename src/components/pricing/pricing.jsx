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
          <div className="price">
            <div>
              <FaRupeeSign />
              <h3 className="gradient__text">3000</h3>
            </div>
            <span className="discount">Save 15%</span>
            <div>
              <FaRupeeSign />
              <h3 className="gradient__text">2550</h3>
            </div>
          </div>
          <p>
            <FaStarOfLife /> Offer applicable till April 9, 2023
          </p>
        </div>
        <div className="thc__pricing-features">
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
    </div>
  );
};

export default pricing;
