import React, { useEffect, useState } from "react";
import useUser from "../../../utils/custom-hooks/useUser";
import "./registrationConf.css";
import { useNavigate } from "react-router-dom";

const RegistrationConfirmation = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    // exit early when we reach 0

    if (!timeLeft || timeLeft === 0) {
      navigate("/purchase");
      setTimeLeft(0);
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div className="section__padding thc__registrationConfirmation-wrapper thc__landingPage">
      <div className="thc__registrationConfirmation-container">
        <h2 style={{ color: "white" }}>
          Dear{" "}
          <strong
            style={{ color: "#81AFDD" }}
          >{`${user?.info?.firstName} ${user?.info?.lastName}`}</strong>
          ,
        </h2>
        <div style={{ color: "white", marginTop: "20px" }}>
          <h3>
            Welcome to our{" "}
            <strong style={{ color: " #7DCE13", fontSize: "2rem" }}>
              Threat Hunters Club!
            </strong>
          </h3>
          <p style={{ marginTop: "20px" }}>
            We are thrilled to have you as a part of our community of
            like-minded individuals who share a passion for Cyber Security.
            Should you have any queries, kindly drop a mail to{" "}
            <span style={{ color: "#81AFDD", textDecoration: "underline" }}>
              thc_admin@threathuntersclub.tech
            </span>
            , we'll get back to you as soon as possible
          </p>
          <p style={{ marginTop: "20px" }}>
            You'll be redirected in {timeLeft}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
