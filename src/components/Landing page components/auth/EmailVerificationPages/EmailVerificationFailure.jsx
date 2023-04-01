import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const EmailVerificationFailure = () => {
  const navigate = useNavigate();
  return (
    <div className="section__padding thc__landingPage thc__emailVerification-wrapper">
      <div className="thc__emailVerification-container">
        <p style={{ color: "white" }}>
          Something went wrong while trying to verify your email, please try
          again.
        </p>
        <Button
          onClick={() => navigate("/login")}
          variant="contained"
          color="error"
        >
          Back to login
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationFailure;
