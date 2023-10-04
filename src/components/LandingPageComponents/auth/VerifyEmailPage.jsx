import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../utils/custom-hooks/useToken";
import "./verifyEmailPage.css";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/registration-confirmation`);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="section__padding thc__landingPage thc__verifyEmail-wrapper">
      <div className="thc__verifyEmail-container">
        <h1>Thanks for joining us</h1>
        <p>
          A verification link has been sent to the email address you have
          provided. Please verify your email.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
