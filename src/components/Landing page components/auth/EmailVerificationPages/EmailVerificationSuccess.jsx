import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../../utils/custom-hooks/useToken";

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();
  const [token] = useToken();
  return (
    <div className="section__padding thc__landingPage thc__emailVerification-wrapper">
      <div className="thc__emailVerification-container">
        <p style={{ color: "white" }}>Thank you for verifying your email</p>
        <Button
          onClick={() => navigate(`/registration-confirmation`)}
          variant="contained"
          color="success"
        >
          Go to home
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
