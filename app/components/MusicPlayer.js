import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSearchParams } from "next/navigation";

function MusicPlayer() {
  const searchParams = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  //Default data
  const [music, setMusic] = useState({
    id: "",
    name: "Noir soul syndicate music player",
    artistName: "click on songs to play",
    img: "/logo.png",
    musicUrl: "#",
  });

  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const songId = searchParams.get("songId");

  const MusicPlayer = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(
          `https://phoenixlabs-noir-soul.onrender.com/api/songs/${songId}`
        );
        const songData = response.data.data;
        if (songData) {
          setMusic({
            id: songData._id,
            name: songData.name,
            artistName: songData.artistName,
            img: `https://gateway.pinata.cloud/ipfs/${songData.img}`,
            musicUrl: `https://gateway.pinata.cloud/ipfs/${songData.song}`,
          });
        }
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    };

    if (songId) {
      fetchSong();
    }
  }, [songId]);

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.onloadedmetadata = () => {
        setDuration(audioElement.current.duration);
        console.log(
          "Metadata loaded, duration: ",
          audioElement.current.duration
        );
      };

      audioElement.current.ontimeupdate = () => {
        setCurrTime(audioElement.current.currentTime);
        setSeekTime((audioElement.current.currentTime / duration) * 100);
      };

      if (music.musicUrl && audioElement.current.src !== music.musicUrl) {
        audioElement.current.src = music.musicUrl;
      }
    }

    return () => {
      if (audioElement.current) {
        audioElement.current.pause();
      }
    };
  }, [music.musicUrl, duration]);

  const handlePlayPause = () => {
    if (!isPlaying) {
      audioElement.current.play().catch((error) => {
        console.error("Error playing audio: ", error);
      });
    } else {
      audioElement.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeekChange = (event) => {
    const newValue = event.target.value;
    if (audioElement.current) {
      audioElement.current.currentTime = (newValue * duration) / 100;
    }
    setSeekTime(newValue);
  };

  const toggleLiked = () => {
    setIsLiked(!isLiked);
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
}

export default MusicPlayer;
