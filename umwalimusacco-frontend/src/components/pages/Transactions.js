import React, { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("/api/transactions", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <ul className="space-y-2">
        {transactions.map((txn) => (
          <li key={txn.id} className="p-4 bg-gray-100 rounded shadow">
            <p><strong>Type:</strong> {txn.type}</p>
            <p><strong>Amount:</strong> ${txn.amount}</p>
            <p><strong>Date:</strong> {txn.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
