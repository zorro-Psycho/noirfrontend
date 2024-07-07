// pages/CTD.js
"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MusicPlayer from '@/app/components/MusicPlayer';

const CTD = () => {
  const [score, setScore] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tracks = [
    { src: '/music/2_Ciphers.mp3', title: '2_Ciphers' },
    { src: '/music/Decentralization.mp3', title: 'Decentralization' },
    { src: '/music/Digital_Revolution.mp3', title: 'Digital_Revolution' },
    { src: '/music/Game_On.mp3', title: 'Game_on' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.getElementById('gameFrame');
      if (iframe && iframe.contentWindow && typeof iframe.contentWindow.getCurrentScore === 'function') {
        setScore(iframe.contentWindow.getCurrentScore());
      }
    }, 1000); // Update score every second

    return () => clearInterval(interval);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex w-full h-screen bg-purple-700 overflow-hidden">
      <Head>
        <title>Connect The Dots Game</title>
        <meta name="description" content="Play Connect The Dots Game" />
      </Head>
      <main className={`flex-grow relative border-5 border-black rounded-10 overflow-hidden shadow-lg ${isCollapsed ? 'w-full md:w-3/4' : 'w-full md:w-9/12'}`}>
        <iframe
          id="gameFrame"
          src="/Captain-Rogers-master/index.html" // Adjust the path to your HTML file in the public folder
          className="w-full h-full"
          style={{ border: 'none', backgroundColor: 'black' }} // Set background color to black
        ></iframe>
        <div className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded">
          Score: {score}
        </div>
      </main>
      <div className={`flex-shrink-0 h-full flex flex-col items-center justify-center ${isCollapsed ? 'hidden md:flex' : 'flex'}`}
  style={{
    backgroundImage: `url('/game.jpg')`,  // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <MusicPlayer tracks={tracks} isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
</div>

    </div>
  );
};

export default CTD;
