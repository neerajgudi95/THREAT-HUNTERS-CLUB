import React from "react";
import { useUser } from "../../../utils/custom-hooks/useUser";
import "./registrationConf.css";

const RegistrationConfirmation = () => {
  const user = useUser();

  return (
    <div className="section__padding thc__registrationConfirmation-wrapper thc__landingPage">
      <div className="thc__registrationConfirmation-container">
        <h2 style={{ color: "white" }}>
          Dear{" "}
          <strong
            style={{ color: "#81AFDD" }}
          >{`${state?.user?.info?.firstName} ${state?.user?.info?.lastName}`}</strong>
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
          </p>
          <p>
            Thanks for registering with our club, we'll be providing you the
            access to club dashboard 3 days before the start of the course. So
            sit back, relax and brush up on your basics. Should you have any
            queries, kindly drop a mail to{" "}
            <span style={{ color: "#81AFDD", textDecoration: "underline" }}>
              thc_admin@threathuntersclub.tech
            </span>
            , we'll get back to you withing 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
