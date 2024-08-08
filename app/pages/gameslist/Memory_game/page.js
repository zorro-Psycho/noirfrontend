'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("../../../components/MusicPlayer"), {
  ssr: false,
});

const tracks = [
  { src: "/music/2_Ciphers.mp3", title: "2_Ciphers" },
  { src: "/music/Decentralization.mp3", title: "Decentralization" },
  { src: "/music/Digital_Revolution.mp3", title: "Digital_Revolution" },
  { src: "/music/Game_On.mp3", title: "Game_On" },
];

const Game = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const submitScore = async (score, gameId) => {
    const token = Cookies.get('token');
    console.log('Token:', token);
    console.log('Submitting score:', score);
    try {
      const response = await fetch('https://test-noir.vercel.app/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.trim()}`,
        },
        credentials: 'include',
        body: JSON.stringify({ score, gameId }),
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
      const gameId = 5; 
      if (event.origin !== 'https://zorro-psycho.github.io') return;

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
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-10">Memory Game</h1>
        <div className="flex flex-grow">
          <iframe
            src="https://zorro-psycho.github.io/memory_game/"
            width="800"
            height="600"
            title="Whack-a-Mole"
            sandbox="allow-scripts allow-same-origin"
            className="border-4 border-green-400 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg"></p>
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

export default Game;
