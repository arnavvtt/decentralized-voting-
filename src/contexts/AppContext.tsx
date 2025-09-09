// File: src/contexts/AppContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface Candidate {
  id: number;
  name: string;
  description?: string;
  votes: number;
}

type AddCandidatePayload = { name: string; description?: string };

interface AppContextValue {
  candidates: Candidate[];
  addCandidate: (p: AddCandidatePayload) => void;
  removeCandidate: (id: number) => void;
  voteFor: (id: number) => void;
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
}

const defaultCandidates: Candidate[] = [
  { id: 1, name: "Alice", description: "Experienced leader", votes: 12 },
  { id: 2, name: "Bob", description: "Tech innovator", votes: 7 },
  { id: 3, name: "Charlie", description: "Community favorite", votes: 4 },
];

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [candidates, setCandidates] = useState<Candidate[]>(defaultCandidates);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const addCandidate = (p: AddCandidatePayload) => {
    const newCandidate: Candidate = {
      id: Date.now(),
      name: p.name,
      description: p.description || "",
      votes: 0,
    };
    setCandidates((s) => [newCandidate, ...s]);
  };

  const removeCandidate = (id: number) => {
    setCandidates((s) => s.filter((c) => c.id !== id));
  };

  const voteFor = (id: number) => {
    setCandidates((s) =>
      s.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
    );
  };

  return (
    <AppContext.Provider
      value={{ candidates, addCandidate, removeCandidate, voteFor, isAdmin, setIsAdmin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
};
