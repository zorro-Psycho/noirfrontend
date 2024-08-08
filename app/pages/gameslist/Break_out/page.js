'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';

const tracks = [
  {
    title: '2_Ciphers',
    artist: 'FN Fenti®',
    img: '/mus.jpg',
    src: '/music/2_Ciphers.mp3',
  },
  {
    title: 'Decentralization',
    artist: 'FN Fenti®',
    img: '/mus.jpg',
    src: '/music/Decentralization.mp3',
  },
  {
    title: 'Digital_Revolution',
    artist: 'FN Fenti®',
    img: '/mus.jpg',
    src: '/music/Digital_Revolution.mp3',
  },
  {
    title: 'Game_On',
    artist: 'FN Fenti®',
    img: '/mus.jpg',
    src: '/music/Game_On.mp3',
  },
];

const MusicPlayer = dynamic(() => import("../../../components/MusicPlayer"), {
  ssr: false,
});

const TicTacToe = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const submitScore = async (score, gameId) => {
    console.log('Submitting score:', score);
    const token = Cookies.get('token');
    try {
      const response = await fetch('https://test-noir.vercel.app/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.trim()}`,
        },
        credentials: 'include',
        body: JSON.stringify({ score: score, gameId: gameId }),
      });

      if (response.ok) {
        console.log('Score submitted successfully!');
      } else {
        console.error('Failed to submit score.');
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      const gameId = 7; 
      if (event.origin !== 'https://zorro-psycho.github.io/') return;

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

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white flex flex-col justify-between">





      <Header />
      <main className="flex flex-col items-center justify-center py-20 flex-grow">
        <h1 className="text-5xl font-bold mb-10">Breakout Deluxe</h1>
        <div className="flex flex-grow">
          <iframe
            src="https://zorro-psycho.github.io/Breakout/"
            width="900"
            height="700"
            title="Tic Tac Toe Game"
            sandbox="allow-scripts allow-same-origin"
            className="border-4 border-purple-400 rounded-lg shadow-lg flex flex-grow items-center justify-center"
          ></iframe>
        </div>
        <div className="mt-10 text-center">
          {/* <p className="text-lg">
            Enjoy the classic Tic Tac Toe Game! Play against the computer or a friend.
          </p> */}
        </div>
      </main>
      <Footer />
      <div
        className={`fixed bottom-0 left-0 w-full ${
          isCollapsed ? "hidden md:flex" : "flex"
        }`}
      >
        <MusicPlayer
          tracks={tracks}
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
