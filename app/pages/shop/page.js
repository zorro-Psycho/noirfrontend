// pages/shop.js
"use client"
import React, { useState, useRef } from 'react';
import Header from '@/app/components/Header'; // Adjust the path as per your project structure

const Shop = () => {
  const songs = [
    { id: 1, title: '2_Ciphers', src: '/music/2_Ciphers.mp3', image: '/theme.jpg' },
    { id: 2, title: 'Decentralization', src: '/music/Decentralization.mp3', image: '/theme.jpg' },
    { id: 3, title: 'Digital_Revolution', src: '/music/Digital_Revolution.mp3', image: '/theme.jpg' },
    { id: 4, title: 'Game_On', src: '/music/Game_On.mp3', image: '/theme.jpg' },
  ];

  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = (src) => {
    if (currentAudio && isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const audio = new Audio(src);
      audio.play();
      setCurrentAudio(audio);
      setIsPlaying(true);
      audioRef.current = audio;

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
    }
  };

  const handlePause = () => {
    if (currentAudio && isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header /> {/* Include your existing header component */}
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-center mb-10">Shop</h1>
        
        <section className="bg-gray-800 shadow-md rounded-lg p-6 mb-8" style={{ backgroundImage: "url(/theme.jpg)" }}>
          <h2 className="text-3xl font-semibold text-white mb-4">Exclusive Merchandise</h2>
          <p className="text-gray-300 text-bold text-lg leading-relaxed mb-6">
            Browse our shop for exclusive Noir Game Zone merchandise, including apparel, accessories, and collectibles. Enhance your gaming experience with our unique items.
          </p>
        </section>
        
        <section className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Theme Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {songs.map(song => (
              <div key={song.id} className="relative bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center z-0 rounded-lg"
                  style={{ backgroundImage: `url(${song.image})`, opacity: '0.6' }}>
                </div>
                <div className="relative z-10 p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{song.title}</h3>
                  <button onClick={() => handlePlayPause(song.src)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    {currentAudio && isPlaying && currentAudio.src === song.src ? 'Pause' : 'Play'}
                  </button>
                  <audio ref={audioRef} controls src={song.src} className="w-full mt-4"></audio>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Shop;
