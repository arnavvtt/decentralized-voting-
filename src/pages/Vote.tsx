import React from "react";

const candidates = [
  { name: "Alice", description: "Experienced leader", id: 1 },
  { name: "Bob", description: "Tech-savvy innovator", id: 2 },
  { name: "Charlie", description: "Community favorite", id: 3 },
];

export default function Vote() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Cast Your Vote
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {candidates.map((c) => (
          <div
            key={c.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{c.description}</p>
            <button className="bg-purple-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

