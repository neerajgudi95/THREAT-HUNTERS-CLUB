import React, { useState, useEffect } from "react";
import "./PaymentStatus.css";
import { useNavigate } from "react-router-dom";
// import { usePaymentStatusCheck } from "../../../utils/custom-hooks/usePaymentStatusCheck";
import { useSnackbar } from "notistack";
import axios from "axios";

const PaymentStatus = () => {
  // Use the custom hook to get the payment status.
  const navigate = useNavigate();
  // const { paymentStatus } = usePaymentStatusCheck();
  // const paymentStatusCheck = JSON.parse(paymentStatus);
  const [userToken, setUserToken] = useState(() =>
    localStorage.getItem("token")
  );
  const [paymentStatus, setPaymentStatus] = useState(false);

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
  }, []);

  const checkPaymentStatus = async (authorization) => {
    let config = {
      method: "get",
      url: "https://threathuntersclub.tech/api/check-payment-status",
      headers: {
        authorization: authorization,
        "Content-Type": "application/json",
      },
    };
    // console.log(config);
    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setPaymentStatus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkPaymentStatus(userToken);
    // const intervalId = setInterval(() => { checkPaymentStatus(userToken) }, 5000)
    // setTimeout(() => {
    //     clearInterval(intervalId)
    // }, 300000)

    // return () => {
    //     clearInterval(intervalId);
    // };
  }, [userToken]);

  // State to manage the timer and redirection.
  const [timer, setTimer] = useState(10); // 120 seconds = 2 minutes

  const { enqueueSnackbar } = useSnackbar();
  // Update the timer every second.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // When the timer reaches 0, set redirect to true.

    // Clear the interval when the component unmounts.
    return () => clearInterval(interval);
  }, [timer]);

  // Redirect based on payment status after 2 minutes.
  useEffect(() => {
    if (timer === 0) {
      console.log(paymentStatus?.paymentStatus);
      console.log(paymentStatus);
      if (paymentStatus?.paymentStatus) {
        // Redirect to the success page.
        navigate("/login");
        enqueueSnackbar("Payment is successfully, please login again", {
          variant: "success",
        });
        localStorage.removeItem("token");
      } else {
        // Redirect to the failure page.
        navigate("/payment-failure");
        // enqueueSnackbar("Kindly check you internet connection and try again", {
        //   variant: "error",
        // });
      }
    }
  }, [timer, paymentStatus?.paymentStatus]);

  return (
    <div className="thc__landingPage">
      <div className="thc__paymentStatusCheck section__padding">
        <h3>Redirecting in {timer}s...</h3>
        {/* {redirect && <div></div>} */}
        {/* You can add more UI elements here to display payment status or loading spinners */}
      </div>
    </div>
  );
};

export default PaymentStatus;
