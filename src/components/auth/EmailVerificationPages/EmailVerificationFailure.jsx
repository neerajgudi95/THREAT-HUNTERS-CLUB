import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const EmailVerificationFailure = () => {
  const navigate = useNavigate();
  return (
    <div className="section__padding section__margin thc__emailVerification-wrapper">
      <div className="thc__emailVerification-container">
        <p style={{ color: "white" }}>
          Something went wrong while trying to reset your passowrd, please try
          again. May be the link has expired, please try to reset the password
          again
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
