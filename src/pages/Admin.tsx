// src/pages/Admin.tsx - Overwrite

import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAppContext } from '../contexts/AppContext';

export default function Admin() {
  const { candidates, addCandidate, removeCandidate, resetVotes, adminMode } = useAppContext();
  const [newName, setNewName] = useState('');

  if (!adminMode) {
    return (
      <Card style={{ maxWidth: 370, margin: '5vw auto', textAlign: 'center' }}>
        <h2>Admin Panel</h2>
        <p>Log in as admin to manage candidates and votes.</p>
      </Card>
    );
  }

  return (
    <Card style={{ maxWidth: 620, margin: '4vw auto' }}>
      <h2>Admin Panel</h2>
      <p style={{ marginBottom: 25 }}>Add or Remove candidates. Reset votes for a new round.</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (newName.trim().length < 2) return;
          addCandidate(newName.trim());
          setNewName('');
        }}
        style={{ marginBottom: 20, display: 'flex', gap: 9 }}
      >
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="Candidate Name"
        />
        <Button type="submit">
          Add Candidate
        </Button>
      </form>
      {candidates.map(c => (
        <div className="card-item" key={c.id}>
          <span>{c.name}</span>
          <span style={{ color: "#708", fontWeight: 600 }}>{c.votes} votes</span>
          <Button onClick={() => removeCandidate(c.id)} style={{ marginLeft: 10 }}>
            Remove
          </Button>
        </div>
      ))}
      <Button
        onClick={resetVotes}
        style={{ marginTop: 30, background: '#f55e5b' }}
      >
        Reset All Votes
      </Button>
    </Card>
  );
}
