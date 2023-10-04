import React, { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ url, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <iframe
          title="External Content"
          src={url}
          width="80%"
          height="80%"
        ></iframe>
      </div>
    </div>
  );
};

export default PaymentModal;
