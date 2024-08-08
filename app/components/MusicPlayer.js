import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";

function MusicPlayer({ tracks }) {
  const [music, setMusic] = useState({
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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (tracks.length > 0) {
      setMusic({
        name: tracks[currentTrackIndex].title,
        artistName: tracks[currentTrackIndex].artist,
        img: tracks[currentTrackIndex].img,
        musicUrl: tracks[currentTrackIndex].src,
      });
    }
  }, [tracks, currentTrackIndex]);

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.onloadedmetadata = () => {
        setDuration(audioElement.current.duration);
      };

      audioElement.current.ontimeupdate = () => {
        if (audioElement.current) {
          setCurrTime(audioElement.current.currentTime);
          setSeekTime((audioElement.current.currentTime / duration) * 100);
        }
      };

      audioElement.current.onended = () => {
        handleNextTrack();
      };

      if (music.musicUrl && audioElement.current.src !== music.musicUrl) {
        audioElement.current.src = music.musicUrl;
        if (isPlaying) {
          audioElement.current.play();
        }
      }
    }

    return () => {
      if (audioElement.current) {
        audioElement.current.pause();
      }
    };
  }, [music.musicUrl, duration]);

  const handlePlayPause = () => {
    if (audioElement.current) {
      if (!isPlaying) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeekChange = (event) => {
    const newValue = event.target.value;
    if (audioElement.current) {
      audioElement.current.currentTime = (newValue * duration) / 100;
    }
    setSeekTime(newValue);
  };

  const handleNextTrack = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextTrackIndex);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <img src={music.img} alt={music.name} className="w-12 h-12 mr-4" />
        <div>
          <div className="text-lg">{music.name}</div>
          <div className="text-sm text-gray-400">{music.artistName}</div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="mx-2 focus:outline-none hover:bg-yellow-600 rounded-full"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          )}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={seekTime}
          onChange={handleSeekChange}
          className="w-52 mx-2 cursor-pointer"
        />

        <div className="text-sm">
          <span>{formatTime(currTime)}</span> /{" "}
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div>
        <Button variant="contained" color="primary" href={music.musicUrl} download>
          Download
        </Button>
      </div>

      <audio ref={audioElement} />
    </div>
  );
}

export default MusicPlayer;

