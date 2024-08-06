import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "1rem",
        borderRadius: "0.25rem",
      }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>Payment Failure</h2>
      <p style={{ marginBottom: "0.5rem" }}>
        We&apos;re sorry, but your payment could not be processed at this time.
        Please try again later or contact customer support for assistance.
      </p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        Contact Customer Support
      </button>
    </div>
  );
};

export default PaymentFailure;
