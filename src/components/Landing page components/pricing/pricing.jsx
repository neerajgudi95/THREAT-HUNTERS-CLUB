import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "./pricing.css";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const pricing = () => {
  return (
    <div className="thc__landingPage">
      <div className="thc__pricing-wrapper section__padding">
        <div className="thc__pricing-container">
          <div className="thc__pricing-header">
            <p>Membership</p>
            <div className="price">
              <div>
                <FaRupeeSign />
                <h3 className="gradient__text">3500</h3>
              </div>
            </div>
          </div>
          <div className="thc__pricing-features">
            <ul>
              <h3>Features</h3>
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
                <span>Live Training Sessions and their recordings</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>3 Mock interviews.</span>
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
            <ul>
              <h3>Courses offered</h3>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Basics of Networks and Cyber Security</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Advanced Network Security</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Security Operations</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Incident Response</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Malware Analysis</span>
              </li>
              <li>
                <div className="tick">
                  <TiTick size="1.5rem" />
                </div>
                <span>Network Pentesting</span>
              </li>
            </ul>
          </div>
          <Link to="/course-details" className="course-info">
            Checkout course timeline
          </Link>
          <Link to="/register" className="join-link">
            Join us now
          </Link>
        </div>
        <div className="marquee-wrapper">
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default pricing;
