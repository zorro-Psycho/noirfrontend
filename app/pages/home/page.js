'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Head>
        <title>NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your Ultimate Destination for Open-Source Gaming" />
      </Head>
      <Header />
      <section className="relative bg-scroll text-center bg-cover bg-top bg-no-repeat py-40" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white">Welcome to NOIR GAME ZONE</h1>
          <p className="text-xl text-white mt-4">Your Ultimate Destination for Gaming</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Explore Now</button>
        </div>
      </section>

      <div className="bg-gray-900 text-white px-15 py-22">
        <div className="mx-auto text-center px-40">
          <p className="text-lg md:text-2xl px-10 font-serif py-10 -mb-10">The ultimate destination for cutting-edge online gaming. Experience the thrill of competition, the joy of discovery, and the power of community.</p>
        </div>
      </div>

      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-6xl mb-10 text-white font-sans">Featured Games</h2>
        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-20 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
            onClick={scrollLeft}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &larr;
          </button>
          <div ref={scrollRef} className="overflow-x-auto hide-scrollbar flex-1">
            <div className="flex gap-5">
              <div className="game-card">
                <img src="/img1.jpg" alt="Game 1" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Snake Game</h3>
                <p className="mt-2 text-m font-serif text-gray-400">Navigate your snake to grow longer by eating food while avoiding collisions in this classic arcade game.</p>
                {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button> */}
                <button
  onClick={() => { window.location.href = "http://localhost:3000/pages/gameslist/Snake"; }}
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10"
> Play Now
</button>
                
              </div>
     <div className="game-card">
                <img src="/unnamed.png" alt="Game 4" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">2048</h3>
                <p className="mt-2 text-m font-serif text-gray-400">Embark on a captivating puzzle journey where you combine numbered tiles to conquer the elusive 2048 tile, testing your strategy and skill.</p>
                {/* <button onclick="localhost:3000/pages/flappybird" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button> */}
                <button
  onClick={() => { window.location.href = "http://localhost:3000/pages/gameslist/2048"; }}
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10"
>
  Play Now
</button>

              </div>
              <div className="game-card">
                <img src="/img4.jpg" alt="Game 4" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Tic Tac Toe</h3>
                <p className="mt-2 text-m font-serif text-gray-400">Classic strategy game where two players take turns marking spaces in a 3x3 grid to achieve three in a row.</p>
                {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button> */}
                <button
  onClick={() => { window.location.href = "http://localhost:3000/pages/gameslist/tic_tac_toe"; }}
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10"
>
  Play Now
</button>
              </div>
              <div className="game-card">
                <img src="/img2.jpg" alt="Game 2" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Vega Strike</h3>
                <p className="mt-2 text-m font-serif text-gray-400">Futuristic RTS: Humans vs. aliens with bases, resources, and intense battles.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button>
              </div>
              <div className="game-card">
                <img src="/captain-roger.jpg" alt="Game 3" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Captain Roger</h3>
                <p className="mt-2 text-m font-serif text-gray-400">Captain Rogers: Asteroid Belt of Sirius" is a thrilling space adventure.
                collect resources to advance through levels.</p>
                <Link href= '/pages/captain-roger-game'>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button>
                </Link>
              </div>
              <div className="game-card">
                <img src="/img5.jpg" alt="Game 5" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Xonotic</h3>
                <p className="mt-2 text-m font-serif text-gray-400">A fast-paced first-person shooter (FPS) game inspired by classic arena shooters like Quake III Arena.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button>
              </div>
              <div className="game-card">
                <img src="/img1.jpg" alt="Game 1" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">Battle for Wesnoth</h3>
                <p className="mt-2 text-m font-serif text-gray-400">A fantasy turn-based strategy game inspired by classic titles like Heroes of Might and Magic.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button>
              </div>
              <div className="game-card">
                <img src="/img3.jpg" alt="Game 3" className="rounded" />
                <h3 className="text-2xl mt-6 text-white">SuperTuxKart</h3>
                <p className="mt-2 text-m font-serif text-gray-400">A 3D kart racing game similar to Mario Kart. Race against other characters on various tracks.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition mt-8 mb-10">Play Now</button>
              </div>
            </div>
          </div>
          <button
            className="absolute right-0 z-20 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
            onClick={scrollRight}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &rarr;
          </button>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .game-card {
          flex: 0 0 auto;
          width: 300px; /* Adjust as needed */
          background-color: rgba(35, 35, 41, 0.4);
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .game-card:hover {
          transform: scale(1.05);
        }

        .game-card img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }

        .game-card h3 {
          color: #fff;
          font-size: 1.5rem;
          margin-top: 1rem;
        }

        .game-card p {
          color: #ccc;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .game-card button {
          background-color: #3490dc;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .game-card button:hover {
          background-color: #2779bd;
        }

        button {
          background-color: rgba(55, 55, 55, 0.5);
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: rgba(55, 55, 55, 0.7);
        }
      `}</style>

      <div className="bg-gray-900 text-white px-15 py-22">
        <div className="mx-auto text-center px-40">
          <p className="text-lg md:text-2xl px-10 font-serif py-10 -mb-10">Earn exclusive NFTs and Noir Coin® by participating in a variety of gaming activities, achieving milestones, and engaging with our vibrant community.</p>
        </div>
      </div>
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl mb-10 text-white">Join the Community</h2>
        <p className="mb-10 text-gray-300">Connect with fellow gamers, participate in events, and stay updated.</p>
        <div className="flex justify-center">
          {/* Social media integration */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
