// src/pages/Vote.tsx - Overwrite

import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAppContext } from '../contexts/AppContext';

export default function Vote() {
  const { candidates, voteFor, wallet } = useAppContext();
  const [votedId, setVotedId] = useState<string | null>(null);

  const handleVote = (id: string) => {
    if (!wallet.address) {
      alert('Please connect your wallet first.');
      return;
    }
    voteFor(id);
    setVotedId(id);
  };

  return (
    <Card style={{ maxWidth: 640, margin: '5vw auto' }}>
      <h2>Vote for Your Candidate</h2>
      {candidates.map(c => (
        <div
          className={`card-item${votedId === c.id ? ' selected animate-bounce' : ''}`}
          key={c.id}
        >
          <span style={{ fontWeight: 600 }}>{c.name}</span>
          <Button
            onClick={() => handleVote(c.id)}
            disabled={votedId !== null}
            style={{ marginLeft: 10 }}
          >
            {votedId === c.id ? 'Voted!' : 'Vote'}
          </Button>
        </div>
      ))}
      {!wallet.address && (
        <div style={{ color: '#bb5e06', marginTop: '1em', fontWeight: 500 }}>
          Connect your MetaMask wallet to vote.
        </div>
      )}
      {votedId && (
        <div style={{
          color: '#208683', marginTop: 19,
          fontWeight: 700, fontSize: '1.1em'
        }}>
          Thanks! Your vote was submitted.
        </div>
      )}
    </Card>
  );
}

   