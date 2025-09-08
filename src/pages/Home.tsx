import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">
        Welcome to Decentralized Voting
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Secure, transparent, and blockchain-powered voting for everyone.
      </p>
      <Link
        to="/vote"
        className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
      >
        Start Voting
      </Link>
    </div>
  );
}

