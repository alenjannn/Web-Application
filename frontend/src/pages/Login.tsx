import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    // These classes will work once your config is fixed
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      
      {/* This div is centered on the page */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Login Page</h1>
        <p className="mb-6 text-lg">Please enter your credentials to log in.</p>
        <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;