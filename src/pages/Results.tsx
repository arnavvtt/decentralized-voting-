import React from "react";
import { useAppContext } from "../contexts/AppContext";
import CandidateCard from "../components/CandidateCard";

const Results: React.FC = () => {
  const { candidates } = useAppContext();

  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Election Results</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCandidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
};

export default Results;

