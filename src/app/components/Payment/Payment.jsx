"use client";

import React, { useState } from "react";

import styles from "./Payment.module.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment processing logic
    console.log("Payment Details:", {
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
    });
    alert("Payment processed successfully!");
  };

  return (
    <div className={styles.payment_form}>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className={styles.form_group}>
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className={styles.form_group}>
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            required
          />
        </div>
        <div className={styles.form_group}>
          <label>Card Holder Name</label>
          <input
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <button type="submit" className={styles.submit_button}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
