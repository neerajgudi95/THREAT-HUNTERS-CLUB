import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PasswordResetSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="section__padding thc__passwordResetSuccess-wrapper thc__landingPage">
      <div className="thc__passwordResetSuccess-container">
        <p style={{ color: "white" }}>
          Your password has been reset successfully. Kindly login with new
          password
        </p>
        <Button
          onClick={() => navigate("/login")}
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
