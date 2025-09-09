import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Voting DApp</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/vote"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Go to Vote
        </Link>
        <Link
          to="/results"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          See Results
        </Link>
      </div>
    </div>
  );
};

export default Home;
