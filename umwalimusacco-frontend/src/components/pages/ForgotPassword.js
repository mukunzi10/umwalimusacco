import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/forgot-password", { email });
      setMessage(response.data.message);
      setError(""); // Clear any previous error
    } catch (err) {
      setError("Failed to send password reset email. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Reset Password</h2>
        {message && <p className="text-green-500 text-sm text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Reset Link
          </button>
          <p className="text-center text-sm">
            Remembered your password? <Link to="/" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
