'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Cookies from 'js-cookie';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <>
      <Head>
        <title>NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="flex justify-between items-center p-6 bg-gray-900">
        <div className="relative w-10 h-10">
          <Image src="/noir-coin-n.png" alt="NOIR Coin" layout="fill" objectFit="cover"  />
        </div>
        <div className="text-2xl font-bold text-blue-500">NOIR GAME ZONE</div>
        <nav>
          <ul className="flex gap-5 list-none">
            <li className="relative group">
              <Link href="/" className="text-white hover:text-blue-500 transition">Home</Link>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/game" className="text-white hover:text-blue-500 transition">Games</Link>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><Link href="/pages/game" className="block px-4 py-1 text-white hover:bg-black-700">Featured Games</Link></li>
                <li><Link href="/pages/game-categories" className="block px-4 py-2 text-white hover:bg-gray-700">Game Categories</Link></li>
              </ul>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/noir-coin" className="text-white hover:text-blue-500 transition">Noir Coin® & NFTs</Link>
            </li>
            <li className="relative group z-10">
              <Link href="#" className="text-white hover:text-blue-500 transition">Community</Link>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Forums</Link></li>
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Events</Link></li>
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Leaderboards</Link></li>
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Tournaments</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="/pages/blog" className="text-white hover:text-blue-500 transition">Blog</Link>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/faq" className="text-white hover:text-blue-500 transition">Support</Link>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><Link href="/pages/faq" className="block px-4 py-2 text-white hover:bg-gray-700">FAQs</Link></li>
                <li><Link href="/pages/contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact Us</Link></li>
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Technical Support</Link></li>
              </ul>
            </li>
            {isAuthenticated ? (
              <>
                <li className="relative group z-10">
                  <Link href="/pages/profile" className="text-white hover:text-blue-500 transition">Account</Link>
                  <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                    <li><Link href="/pages/profile" className="block px-4 py-2 text-white hover:bg-gray-700">Profile</Link></li>
                    <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Achievements</Link></li>
                    <li><Link href="/pages/setting" className="block px-4 py-2 text-white hover:bg-gray-700">Settings</Link></li>
                  </ul>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-blue-500 transition">Logout</button>
                </li>
              </>
            ) : (
              <li className="relative group z-10">
                <Link href="/pages/login" className="text-white hover:text-blue-500 transition">Login</Link>
              </li>
            )}
            <li className="relative group z-10">
              <Link href="#" className="text-white hover:text-blue-500 transition">Shop</Link>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Merchandise</Link></li>
                <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-700">In-Game Items</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="/pages/about" className="text-white hover:text-blue-500 transition">About Us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <input type="text" placeholder="Search games..." className="p-2 rounded bg-gray-800 text-white border border-gray-600" />
        </div>
      </header>
    </>
  );
}

export default Header;
