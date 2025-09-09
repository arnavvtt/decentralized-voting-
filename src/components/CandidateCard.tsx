import React from "react";
import type { Candidate } from "../contexts/AppContext";
import { useAppContext } from "../contexts/AppContext";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const { voteFor, adminMode, removeCandidate } = useAppContext();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm m-4">
      <h2 className="text-xl font-bold text-gray-800">{candidate.name}</h2>

      {/* description hata diya kyunki type me nahi hai */}
      <p className="text-gray-700 mt-2">Votes: {candidate.votes}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => voteFor(candidate.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded transition"
        >
          Vote
        </button>

        {adminMode && (
          <button
            onClick={() => removeCandidate(candidate.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded transition"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;


