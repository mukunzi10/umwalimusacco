import React, { useState } from "react";
import axios from "axios";

function Loans() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleLoanRequest = async () => {
    try {
      const response = await axios.post(
        "/api/loans/request",
        { amount },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to request loan.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Loans</h1>
      <div className="space-y-4">
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Enter loan amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleLoanRequest}
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Request Loan
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </div>
    </div>
  );
}

export default Loans;
