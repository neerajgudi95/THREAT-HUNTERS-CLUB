import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../../../utils/custom-hooks/useToken";
import EmailVerificationSuccess from "./EmailVerificationSuccess";
import EmailVerificationFailure from "./EmailVerificationFailure";
import Loader from "../../loader/Loader";

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(`/api/verify-email`, {
          verificationString,
        });
        const { token } = response.data;

        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (error) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };
    loadVerification();
  }, [setToken, verificationString]);

  if (isLoading) return <Loader />;
  if (!isSuccess) return <EmailVerificationFailure />;
  if (isSuccess) return <EmailVerificationSuccess />;
};

export default EmailVerification;
