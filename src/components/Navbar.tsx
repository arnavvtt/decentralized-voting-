// File: src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

export default function Navbar() {
  const { wallet, connectWallet, adminMode, setAdminMode } = useAppContext();

  return (
    <nav className="w-full flex items-center justify-between bg-gray-100 p-4 shadow-md">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-700">
        Voting DApp
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link to="/" className="text-gray-800 hover:text-purple-600 font-medium">Home</Link>
        <Link to="/vote" className="text-gray-800 hover:text-purple-600 font-medium">Vote</Link>
        <Link to="/results" className="text-gray-800 hover:text-purple-600 font-medium">Results</Link>
        <Link to="/admin" className="text-gray-800 hover:text-purple-600 font-medium">Admin</Link>
      </div>

      {/* Wallet & Admin */}
      <div className="flex items-center gap-3">
        {wallet.address ? (
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold">
            {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
          </span>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Connect Wallet
          </button>
        )}

        <button
          onClick={() => setAdminMode(!adminMode)}
          className={`px-4 py-2 rounded-md font-semibold transition
            ${adminMode ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
        >
          {adminMode ? 'Leave Admin' : 'Admin Login'}
        </button>
      </div>
    </nav>
  );
}

