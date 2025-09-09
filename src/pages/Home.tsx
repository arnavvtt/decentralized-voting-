// src/pages/Home.tsx - Overwrite

import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

export default function Home() {
  const navigate = useNavigate();
  const { wallet } = useAppContext();

  return (
    <Card style={{ maxWidth: 470, margin: '4vw auto', textAlign: 'center' }}>
      <h2>Welcome to Amrit Decentralized Voting</h2>
      <p>
        Vote securely via blockchain wallet.<br />Your choice counts for our community.<br /><br />
        <b>Instructions:</b><br />
        1. Connect your MetaMask wallet.<br />
        2. Go to <b>Vote</b> to select your candidate.<br />
        3. View live results anytime.<br />
        4. (Admins) Manage candidates in Admin panel.
      </p>
      <Button onClick={() => navigate('/vote')} style={{ fontWeight: 500 }}>
        Vote Now
      </Button>
      <Button onClick={() => navigate('/admin')} style={{ marginLeft: 16, background: '#644fff' }}>
        Admin Login
      </Button>
    </Card>
  );
}

