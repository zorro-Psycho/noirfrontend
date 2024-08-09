'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Cookies from 'js-cookie';
import './Headercs.css'; // Import the CSS file

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="header">
        <div className="header-logo">
          <Link href="#">
            <Image src="/noir-coin-n.png" alt="NOIR Coin" layout="fill" objectFit="cover" />
          </Link>
        </div>
        <div className="header-title">NOIR GAME ZONE</div>

        {/* Menu Button for smaller screens */}
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation menu */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className="relative group">
              <Link href="/" className="text-white hover:text-blue-500 transition">Home</Link>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/game" className="text-white hover:text-blue-500 transition">Games</Link>
              <ul className="dropdown">
                <li><Link href="/pages/game" className="block">Featured Games</Link></li>
                <li><Link href="/pages/game-categories" className="block">Game Categories</Link></li>
              </ul>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/noir-coin" className="text-white hover:text-blue-500 transition">Noir Coin® & NFTs</Link>
            </li>
            <li className="relative group z-10">
              <Link href="#" className="text-white hover:text-blue-500 transition">Community</Link>
              <ul className="dropdown">
                <li><Link href="#" className="block">Forums</Link></li>
                <li><Link href="#" className="block">Events</Link></li>
                <li><Link href="/pages/leaderboard" className="block">Leaderboards</Link></li>
                <li><Link href="/pages/tournament" className="block">Tournaments</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="/pages/blog" className="text-white hover:text-blue-500 transition">Blog</Link>
            </li>
            <li className="relative group z-10">
              <Link href="/pages/faq" className="text-white hover:text-blue-500 transition">Support</Link>
              <ul className="dropdown">
                <li><Link href="/pages/faq" className="block">FAQs</Link></li>
                <li><Link href="/pages/contact" className="block">Contact Us</Link></li>
                <li><Link href="/pages/technical" className="block">Technical Support</Link></li>
              </ul>
            </li>
            {isAuthenticated ? (
              <>
                <li className="relative group z-10">
                  <Link href="/pages/profile" className="text-white hover:text-blue-500 transition">Account</Link>
                  <ul className="dropdown">
                    <li><Link href="/pages/profile" className="block">Profile</Link></li>
                    <li><Link href="#" className="block">Achievements</Link></li>
                    <li><Link href="/pages/setting" className="block">Settings</Link></li>
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
              <Link href="https://my-store-f7cfd7.creator-spring.com" className="text-white hover:text-blue-500 transition">Shop</Link>
              <ul className="dropdown">
                <li><Link href="https://my-store-f7cfd7.creator-spring.com" className="block">Merchandise</Link></li>
                <li><Link href="#" className="block">In-Game Items</Link></li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="/pages/about" className="text-white hover:text-blue-500 transition">About Us</Link>
            </li>
          </ul>
        </nav>

        {/* Search bar, visible on large screens */}
        <div className="search-bar">
          <input type="text" placeholder="Search games..." />
        </div>
      </header>
    </>
  );
}

export default Header;
