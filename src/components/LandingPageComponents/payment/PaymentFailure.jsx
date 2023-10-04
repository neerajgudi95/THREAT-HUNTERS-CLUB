import React from "react";
import "./PaymentFailure.css";

const PaymentFailure = () => {
  return (
    <div className="thc__landingPage">
      <div className="thc__paymentFailure section__padding">
        <div>
          <h2>Payment Failed</h2>
          <p>Unfortunately, there was issue with the payment.</p>
          <p>
            If the money got deducted from your account, and the payment process
            failed, kindly drop an email to <br />
            <strong>threathuntersclub@gmail.com</strong>
          </p>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
