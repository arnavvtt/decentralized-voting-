import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Voting DApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/vote" className="hover:text-yellow-400">Vote</Link>
        <Link to="/results" className="hover:text-yellow-400">Results</Link>
      </div>
    </nav>
  );
};

export default Navbar;
