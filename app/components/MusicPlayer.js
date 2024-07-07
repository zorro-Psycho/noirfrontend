// components/MusicPlayer.js
import { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ tracks, isCollapsed, toggleCollapse }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const { src, title } = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedData = () => {
        setDuration(audio.duration);
      };
      audio.addEventListener('loadeddata', handleLoadedData);

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      audio.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [src]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true); // Auto play next track
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(true); // Auto play previous track
  };

  return (
    <div className="music-player-container relative bg-gray-800 rounded-lg shadow-md text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/game.jpg')`,
          opacity: '0.3', // Adjust opacity as needed
        }}
      ></div>
      {/* Music Player Content */}
      <div className="p-4 relative z-10">
        <h2 className="text-xl font-bold mb-4">Music Player</h2>
        <div className={`bg-gray-800 rounded-lg shadow-md text-white ${isCollapsed ? 'w-16' : 'w-64'}`}>
          {!isCollapsed && (
            <>
              <audio ref={audioRef} src={src} autoPlay={isPlaying}></audio>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <div className="flex items-center justify-between">
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-blue-600 rounded-full focus:outline-none"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m5-3H5" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.487-4.033A1 1 0 007 8v8a1 1 0 001.265.968l6.487-4.033a1 1 0 000-1.736z" />
                    </svg>
                  )}
                </button>
                <div className="mx-4">{formatTime(currentTime)} / {formatTime(duration)}</div>
              </div>
              <input
                type="range"
                className="w-full mt-2"
                value={currentTime}
                max={duration}
                onChange={(e) => audioRef.current.currentTime = e.target.value}
              />
              <div className="flex mt-2">
                <button
                  onClick={previousTrack}
                  className="p-2 bg-purple-600 rounded-full focus:outline-none"
                >
                  Previous
                </button>
                <button
                  onClick={nextTrack}
                  className="p-2 bg-purple-600 rounded-full focus:outline-none ml-2"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
        {/* Collapse/Expand Button */}
        <button
          onClick={toggleCollapse}
          className="absolute bottom-4 right-4 p-2 bg-blue-600 rounded-full focus:outline-none"
        >
          {isCollapsed ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
