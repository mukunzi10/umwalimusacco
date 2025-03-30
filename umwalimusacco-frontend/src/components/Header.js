import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">U-SACCO</h1>
        <nav>
          <Link to="/dashboard" className="px-3 hover:underline">Dashboard</Link>
          <Link to="/profile" className="px-3 hover:underline">Profile</Link>
          <Link to="/Login" className="px-3 hover:underline">Logout</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
