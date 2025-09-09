import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import CandidateCard from "../components/CandidateCard";

const Vote: React.FC = () => {
  const { candidates, addCandidate, isAdmin, setIsAdmin } = useAppContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (name.trim() === "") return;
    addCandidate({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vote for your favorite candidate</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setIsAdmin(!isAdmin)}
        >
          Toggle Admin
        </button>
      </div>

      {isAdmin && (
        <div className="mb-6 p-4 bg-white rounded shadow">
          <input
            type="text"
            placeholder="Candidate Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            onClick={handleAdd}
          >
            Add Candidate
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
};

export default Vote;
