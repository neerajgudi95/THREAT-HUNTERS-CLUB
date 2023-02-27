import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../utils/custom-hooks/useToken";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/member/${token.split(".")[0]}/dashboard`);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div className="section__padding section__margin thc__verifyEmail-wrapper">
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
