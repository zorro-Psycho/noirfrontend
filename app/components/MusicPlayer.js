import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ tracks, isCollapsed, toggleCollapse }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const { src, title } = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedData = () => {
        setDuration(audio.duration);
        setIsLoading(false);
      };
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      const handleError = (error) => {
        console.error('Error loading audio:', error);
        setIsLoading(false);
      };

      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('error', handleError);

      return () => {
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {}).catch((error) => console.error('Playback error:', error));
        }
      }
      setIsPlaying(!isPlaying);
    }
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
    <div className="music-player-container relative bg-slate-400 transition-all duration-500  dark:border-slate-500 border-b rounded-t-xl p-0 pb-0.1 ">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/game.jpg')`,
          opacity: '0.3', // Adjust opacity as needed
        }}
      ></div>
      {/* Music Player Content */}
      <div className="p-3 relative z-10">
        <h2 className="text-slate-950 text-center transition-all duration-500 dark:text-slate-800 text-2xl">Music Player</h2>
        <div className={`bg-gray-800 p-5 rounded-lg shadow-md text-white ${isCollapsed ? 'w-16' : 'w-64'}`}>
          {!isCollapsed && (
            <>
              <audio ref={audioRef} src={src} autoPlay={isPlaying}></audio>
              <h3 className="text-slate-300 transition-all duration-500 dark:text-slate-400 text-lg pb-3 pl-1 leading-7 truncate">{title}</h3>
              <div className="flex items-center justify-between">
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-blue-950 rounded-full focus:outline-none"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    <>
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m5-3H5" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.487-4.033A1 1 0 007 8v8a1 1 0 001.265.968l6.487-4.033a1 1 0 000-1.736z" />
                        </svg>
                      )}
                    </>
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
                  className="p-2 bg-blue-950 rounded-full focus:outline-none"
                >
                  <svg width="24" height="24" fill="none">
        <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
                  
                </button>
                <button
                  onClick={nextTrack}
                  className="p-2 bg-blue-950 rounded-full focus:outline-none ml-2"
                >
                  <svg width="24" height="24" fill="none">
                <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
                  
                </button>
              </div>
            </>
          )}
        </div>
        {/* Collapse/Expand Button */}
        <button 
          onClick={toggleCollapse}
          className="absolute bottom-4 right-4 p-2 mr-2 mb-2 bg-blue-600 rounded-full focus:outline-none"
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
