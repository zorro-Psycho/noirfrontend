// "use client";

// import React, { useState, useEffect } from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import dynamic from "next/dynamic";

// import Cookies from "js-cookie";
// // import MusicPlayer from '../../../components/MusicPlayer';
// const MusicPlayer = dynamic(() => import("../../../components/MusicPlayer"), {
//   ssr: false,
// });

// const tracks = [
//   { src: '/music/2_Ciphers.mp3', title: '2_Ciphers' },
//   { src: '/music/Decentralization.mp3', title: 'Decentralization' },
//   { src: '/music/Digital_Revolution.mp3', title: 'Digital_Revolution' },
//   { src: '/music/Game_On.mp3', title: 'Game_on' }
// ];

// const Game = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing MusicPlayer

//   const submitScore = async (score, gameId) => {
//     console.log("Submitting score:", score);
//     console.log("gameId:", gameId);
//     const token = Cookies.get("token");
//     try {
//       const response = await fetch(
//         "https://test-noir.vercel.app/api/submit-score",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token.trim()}`,
//           },
//           credentials: "include",
//           body: JSON.stringify({ score: score, gameId: gameId }),
//         }
//       );

//       if (response.ok) {
//         console.log("Score submitted successfully!");
//         // alert('Score submitted successfully!');
//       } else {
//         console.error("Failed to submit score.");
//         // alert('Failed to submit score.');
//       }
//     } catch (error) {
//       console.error("Error submitting score:", error);
//     }
//   };

//   useEffect(() => {
//     const handleMessage = (event) => {
//       // Check if the message is coming from the game iframe
//       if (event.origin !== "https://zorro-psycho.github.io") return;
//       const gameId = 1;

//       console.log("Message received from iframe:", event.data);
//       if (
//         event.data.type === "submit-score" &&
//         typeof event.data.score === "number"
//       ) {
//         submitScore(event.data.score, gameId);
//       } else {
//         console.error("Invalid message format or missing score:", event.data);
//       }
//     };

//     window.addEventListener("message", handleMessage);

//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed); // Toggles the collapsed state
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900">
//       <Header />
//       <main className="flex flex-col items-center justify-center py-20">
//         <h1 className="text-4xl text-slate-300 transition-all duration-500 dark:text-slate-400 font-bold mb-10">Play 2048</h1>
//         <div className="flex flex-grow">
//         <iframe
//           src="https://zorro-psycho.github.io/2048/"
//           width="800"
//           height="600"
//           title="2048 Game"
//           sandbox="allow-scripts allow-same-origin"
//           className="border-4 border-blue-950 rounded-lg shadow-lg flex flex-row items-center justify-center"
//         ></iframe>

// <div>
//         <div className={`flex-shrink-0 h-full flex flex-row items-center justify-center ${isCollapsed ? 'hidden md:flex' : 'flex'}`}
//           style={{
//             backgroundImage: `url('/game.jpg')`,  // Replace with your background image URL
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* <MusicPlayer tracks={tracks} isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} /> */}
//           <MusicPlayer
//         tracks={tracks}
//         isCollapsed={isCollapsed}
//         toggleCollapse={toggleCollapse}
//       />
//         </div>
//       </div>

//         </div>
        
//       </main>
      
      
//       <Footer/>
//     </div>
//   );
// };

// export default Game;
"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";

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
    console.log("Submitting score:", score);
    console.log("gameId:", gameId);
    const token = Cookies.get("token");
    try {
      const response = await fetch(
        "https://test-noir.vercel.app/api/submit-score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.trim()}`,
          },
          credentials: "include",
          body: JSON.stringify({ score, gameId }),
        }
      );

      if (response.ok) {
        console.log("Score submitted successfully!");
      } else {
        console.error("Failed to submit score.");
      }
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://zorro-psycho.github.io") return;
      const gameId = 1;

      console.log("Message received from iframe:", event.data);
      if (
        event.data.type === "submit-score" &&
        typeof event.data.score === "number"
      ) {
        submitScore(event.data.score, gameId);
      } else {
        console.error("Invalid message format or missing score:", event.data);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
    

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col justify-between">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow py-20">
        <h1 className="text-4xl text-slate-300 transition-all duration-500 dark:text-slate-400 font-bold mb-10">
          Play 2048
        </h1>
        <div className="flex flex-grow">
          <iframe
            src="https://zorro-psycho.github.io/2048/"
            width="800"
            height="600"
            title="2048 Game"
            sandbox="allow-scripts allow-same-origin"
            className="border-4 border-blue-950 rounded-lg shadow-lg"
          ></iframe>
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
