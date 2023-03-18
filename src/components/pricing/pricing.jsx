import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaStarOfLife } from "react-icons/fa";
import "./pricing.css";
import { Link } from "react-router-dom";

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
              <div className="tick">
                <TiTick size="1.5rem" />
              </div>
              <span>One-year membership of the club.</span>
            </li>
            <li>
              <div className="tick">
                <TiTick size="1.5rem" />
              </div>
              <span>Training Sessions and Mock interviews.</span>
            </li>
            <li>
              <div className="tick">
                <TiTick size="1.5rem" />
              </div>
              <span>Online tech resources: docs, blogs, talks.</span>
            </li>
            <li>
              <div className="tick">
                <TiTick size="1.5rem" />
              </div>
              <span>Networking Opportunities</span>
            </li>
          </ul>
        </div>
        <Link to="/" className="join-link">
          Join us now
        </Link>
      </div>
    </div>
  );
};

export default pricing;
