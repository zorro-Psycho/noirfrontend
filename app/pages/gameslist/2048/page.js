
'use client';

import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


const Game = () => {
  const submitScore = async (score,gameId) => {
    console.log('Submitting score:', score);
    console.log('gameId:', gameId);
    try {
      const response = await fetch('http://localhost:5000/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ score:score,gameId:gameId }),
      });

      if (response.ok) {
        console.log('Score submitted successfully!');
        // alert('Score submitted successfully!');
      } else {
        console.error('Failed to submit score.');
        // alert('Failed to submit score.');
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the message is coming from the game iframe
      if (event.origin !== 'https://zorro-psycho.github.io') return;
      const gameId = 1;

      console.log('Message received from iframe:', event.data);
      if (event.data.type === 'submit-score' && typeof event.data.score === 'number') {
        submitScore(event.data.score, gameId);
      } else {
        console.error('Invalid message format or missing score:', event.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-10">Play 2048</h1>
        <iframe
          src="https://zorro-psycho.github.io/2048/"
          width="800"
          height="600"
          title="2048 Game"
          sandbox="allow-scripts allow-same-origin"
          className="border-4 border-yellow-400 rounded-lg shadow-lg"
        ></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default Game;
