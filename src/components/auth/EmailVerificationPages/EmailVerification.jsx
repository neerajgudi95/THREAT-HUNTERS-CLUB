import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../../utils/custom-hooks/useToken";
import EmailVerificationSuccess from "./EmailVerificationSuccess";
import EmailVerificationFailure from "./EmailVerificationFailure";
import Loader from "../../loader/Loader";

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verifitcationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(
          `${process.env.ENDPOINT}/api/verify-email`,
          {
            verifitcationString,
          }
        );
        const { token } = response.data;
        console.log(token);
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (error) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };
    loadVerification();
  }, [setToken, verifitcationString]);

  if (isLoading) return <Loader />;
  if (!isSuccess) return <EmailVerificationFailure />;
  if (isSuccess) return <EmailVerificationSuccess />;
};

export default EmailVerification;
