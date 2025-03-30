import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/transactions" className="bg-green-100 p-4 rounded-lg shadow hover:bg-green-200">
          <h2 className="text-lg font-bold">Transactions</h2>
          <p>View deposit and withdrawal history.</p>
        </Link>
        <Link to="/loans" className="bg-blue-100 p-4 rounded-lg shadow hover:bg-blue-200">
          <h2 className="text-lg font-bold">Loans</h2>
          <p>Request and manage loans.</p>
        </Link>
        <Link to="/utilities" className="bg-purple-100 p-4 rounded-lg shadow hover:bg-purple-200">
          <h2 className="text-lg font-bold">Utility Payments</h2>
          <p>Pay bills for electricity, water, and more.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
