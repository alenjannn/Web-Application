import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="mb-6 text-lg">Welcome to the Home Page!</p>
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Go to Login
      </button>
    </div>
  );
};

export default Home;
