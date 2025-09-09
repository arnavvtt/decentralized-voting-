import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

// Candidate type ko export karo
export type Candidate = { id: string; name: string; votes: number };
type User = { address: string | null };

export type AppContextType = {
  candidates: Candidate[];
  voteFor: (id: string) => void;
  resetVotes: () => void;
  addCandidate: (name: string) => void;
  removeCandidate: (id: string) => void;
  wallet: User;
  connectWallet: () => void;
  adminMode: boolean;
  setAdminMode: (mode: boolean) => void;
};

const DEFAULT_CANDIDATES: Candidate[] = [
  { id: '1', name: 'Amit Singh', votes: 0 },
  { id: '2', name: 'Ritu Sharma', votes: 0 },
  { id: '3', name: 'Rajiv Patel', votes: 0 },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook ka name useAppContext rakho
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [candidates, setCandidates] = useState<Candidate[]>(DEFAULT_CANDIDATES);
  const [wallet, setWallet] = useState<User>({ address: null });
  const [adminMode, setAdminMode] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('candidates');
    if (stored) setCandidates(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  const voteFor = (id: string) => {
    setCandidates(cs => cs.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c));
  };

  const resetVotes = () => {
    setCandidates(cs => cs.map(c => ({ ...c, votes: 0 })));
  };

  const addCandidate = (name: string) => {
    setCandidates(cs => [
      ...cs,
      { id: Math.random().toString(36).slice(2, 10), name, votes: 0 }
    ]);
  };

  const removeCandidate = (id: string) => {
    setCandidates(cs => cs.filter(c => c.id !== id));
  };

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setWallet({ address: accounts[0] });
      } catch (e) {
        alert('Wallet connection failed.');
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  return (
    <AppContext.Provider value={{
      candidates,
      voteFor,
      resetVotes,
      addCandidate,
      removeCandidate,
      wallet,
      connectWallet,
      adminMode,
      setAdminMode,
    }}>
      {children}
    </AppContext.Provider>
  );
}

