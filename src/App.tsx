import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="fullscreen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vote" className="hover:underline">
                Vote
              </Link>
            </li>
            <li>
              <Link to="/results" className="hover:underline">
                Results
              </Link>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

