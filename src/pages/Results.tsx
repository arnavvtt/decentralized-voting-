
import React from "react";

const results = [
  { name: "Alice", votes: 120 },
  { name: "Bob", votes: 80 },
  { name: "Charlie", votes: 50 },
];

export default function Results() {
  const maxVotes = Math.max(...results.map((r) => r.votes));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Voting Results
      </h1>
      <div className="space-y-6 max-w-2xl mx-auto">
        {results.map((r, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex justify-between mb-2 text-gray-800 dark:text-white">
              <span>{r.name}</span>
              <span>{r.votes} votes</span>
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600 transition-all duration-700"
                style={{ width: `${(r.votes / maxVotes) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
