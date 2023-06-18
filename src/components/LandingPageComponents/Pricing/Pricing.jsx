import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "./pricing.css";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Pricing = () => {
  return (
    <div className="thc__landingPage">
      <div className="thc__pricing-wrapper section__padding">
        <div>
          <p className="text-red-400">
            We'll be starting a new batch and the registrations will be open
            very soon, we will keep you posted with the updates
          </p>
        </div>
        <div className="thc__pricing-container">
          <div className="thc__pricing-left">
            <h2>Cyber Security course</h2>
            <div className="thc__pricing-features">
              <ul>
                <h3>Features</h3>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>One-year membership of the club.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Live Training Sessions and their recordings</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>3+ Mock interviews.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Online tech resources: docs, blogs, talks.</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Networking Opportunities</span>
                </li>
              </ul>
              <ul>
                <h3>What you learn?</h3>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Basics of Networks and Cyber Security</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Advanced Network Security</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Security Operations</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Incident Response</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Malware Analysis</span>
                </li>
                <li>
                  <div className="tick">
                    <TiTick size="1.5rem" color="#54B435" />
                  </div>
                  <span>Network Pentesting</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="thc__pricing-right">
            <div className="thc__pricing-salescard">
              <div className="thc__pricing-info">
                <div className="thc__pricing-thumbnail">
                  <video
                    src="https://ik.imagekit.io/fq9vykvp2/course_thumbnail.mp4?updatedAt=1683559781117"
                    // controls="controls"
                    autoPlay={true}
                  />
                </div>
                <div className="thc__pricing-details">
                  <div className="thc__pricing-details__container">
                    <div className="actual-price">
                      <FaRupeeSign />
                      <span className="price">5999</span>
                    </div>
                    <span className="discount">15%</span>
                    <div className="discount-price">
                      <FaRupeeSign />
                      <span className="price">5099</span>
                    </div>
                  </div>
                </div>
                <div className="thc__pricing-links">
                  <Link to="/pricing" className="thc__pricing-joinus">
                    JOIN US
                  </Link>
                  <Link to="/course-details" className="thc__pricing-timeline">
                    COURSE TIMELINE
                  </Link>
                </div>
                <div className="thc__pricing-info__footer">
                  <h2>What you get</h2>
                  <ol>
                    <li>3 months of live course</li>
                    <li>Online Accessibility</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <TestComp /> */}
        <div className="marquee-wrapper">
          <Slider />
        </div>
      </div>
    </div>
  );
};
export default Pricing;
