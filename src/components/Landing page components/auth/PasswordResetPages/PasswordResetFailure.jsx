import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PasswordResetFailure = () => {
  const navigate = useNavigate();
  return (
    <div className="section__padding section__margin thc__passwordResetFail-wrapper">
      <div className="thc__passwordResetFail-container">
        <p style={{ color: "white" }}>Something went wrong while trying to verify your email.</p>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          color="error"
        >
          Back to sign up
        </Button>
      </div>
    </div>
  );
};

export default PasswordResetFailure;
