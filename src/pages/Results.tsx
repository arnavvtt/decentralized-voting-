// src/pages/Results.tsx - Overwrite

import React from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';

export default function Results() {
  const { candidates } = useAppContext();
  const maxVotes = Math.max(...candidates.map(c => c.votes), 1);

  return (
    <Card style={{ maxWidth: 670, margin: '5vw auto' }}>
      <h2>Live Results</h2>
      {candidates.map(c => (
        <div key={c.id} style={{
          margin: '1.5em 0', display: 'flex', flexDirection: 'column'
        }}>
          <span style={{
            fontWeight: 600,
            marginBottom: '0.5em'
          }}>{c.name}</span>
          <div style={{
            background: '#EAF2FB',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            height: 26,
            marginBottom: 6,
            boxShadow: '0 2px 9px rgba(20,92,180,.07)'
          }}>
            <div style={{
              width: `${(c.votes / maxVotes) * 100}%`,
              background: '#5dc9ea',
              height: '100%',
              transition: 'width .4s',
              borderRadius: '10px'
            }} />
          </div>
          <span style={{
            fontWeight: 500,
            color: '#294796',
            background: '#f2f4fa',
            borderRadius: 11,
            padding: '2px 12px',
            minWidth: 60
          }}>
            {c.votes} Votes
          </span>
        </div>
      ))}
    </Card>
  );
}


