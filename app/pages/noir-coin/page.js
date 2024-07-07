'use client';

import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NoirRewards = () => {
  return (
    <>
      <Head>
        <title>Noir Coin® & NFTs - NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Earn exclusive NFTs and Noir Coin® by participating in various gaming activities and engaging with the community." />
      </Head>
      <Header />
      <section className="relative bg-scroll text-center bg-cover bg-bottom bg-no-repeat py-10 " style={{ backgroundImage: 'url(/nft.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-8">
          <h1 className="text-5xl font-bold text-white">Noir Coin® & NFTs</h1>
          <p className="text-2xl text-white mt-4">Earn exclusive rewards by engaging with our platform</p>
        </div>
      </section>

      

    
      <section className="py-20 bg-gray-900 text-center text-white"style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1)), url('/bg0.jpeg') no-repeat center center / cover" }}>
 
  <h2 className="text-yellow-300 text-4xl mb-10  font-bold text-center tracking-wide font-serif">Ways to Earn NFTs and Noir Coin®</h2>

  <div className="text-left max-w-4xl mx-auto space-y-10">
    
<div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/achieve.jpg') no-repeat center center / cover" }}>
  <h3 className="text-3xl font-bold mb-4 text-blue-300">1. Game Achievements</h3>
  <p className="text-gray-100">Complete specific achievements and milestones in various games to earn rewards.</p>
  <ul className="list-disc list-inside ml-6 mt-4 text-gray-200">
    <li><strong className="text-blue-300">0 AD</strong>
      <ul className="list-none ml-4 mt-2">
        <li>Beginner Builder: Build your first structure (Reward: 50 Noir Coin®)</li>
        <li>Conqueror: Win your first battle (Reward: Rare NFT - Conqueror’s Helmet)</li>
        <li>Empire Ruler: Complete a game by controlling all territories (Reward: 500 Noir Coin® + Epic NFT - Emperor's Scepter)</li>
      </ul>
    </li>
    <li><strong className="text-blue-300">Battle for Wesnoth</strong>
      <ul className="list-none ml-4 mt-2">
        <li>Novice Strategist: Win your first campaign (Reward: 75 Noir Coin®)</li>
        <li>Hero of Wesnoth: Reach level 10 with a unit (Reward: Unique NFT - Hero’s Medallion)</li>
        <li>Master Tactician: Win 100 battles (Reward: 1000 Noir Coin® + Legendary NFT - Tactician's Shield)</li>
      </ul>
    </li>
    <li><strong className="text-blue-300">Super Tux Kart</strong>
      <ul className="list-none ml-4 mt-2">
        <li>First Race: Complete your first race (Reward: 30 Noir Coin®)</li>
        <li>Speed Demon: Win 50 races (Reward: Rare NFT - Golden Kart)</li>
        <li>Kart Champion: Achieve first place in all races (Reward: 400 Noir Coin® + Epic NFT - Champion's Trophy)</li>
      </ul>
    </li>
    <li><strong className="text-blue-300">Xonotic</strong>
      <ul className="list-none ml-4 mt-2">
        <li>Sharpshooter: Achieve 100 headshots (Reward: 100 Noir Coin®)</li>
        <li>Survivor: Win a match without dying (Reward: Rare NFT - Survivor's Badge)</li>
        <li>Ultimate Warrior: Reach the top of the leaderboard (Reward: 700 Noir Coin® + Legendary NFT - Warrior's Armor)</li>
      </ul>
    </li>
  </ul>
</div>



    
    <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/tournament.jpg') no-repeat center center / cover" }}>
  <h3 className="text-3xl font-bold mb-4 text-green-300">2. Tournaments</h3>
  <p className="text-gray-100">Compete in scheduled tournaments for each game. Entry may require a fee in Noir Coin®. Rewards include significant amounts of Noir Coin® and high-value NFTs.</p>
  <ul className="list-disc list-inside ml-6 mt-4 text-gray-200">
    <li>First Place: 2000 Noir Coin® + Legendary NFT</li>
    <li>Second Place: 1000 Noir Coin® + Epic NFT</li>
    <li>Third Place: 500 Noir Coin® + Rare NFT</li>
  </ul>
</div>


    
    <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/community.jpg') no-repeat center center / cover" }}>
  <h3 className="text-3xl font-bold mb-4 text-red-300">3. Community Engagement</h3>
  <p className="text-gray-100">Earn rewards for active participation in community forums and events.</p>
  <ul className="list-disc list-inside ml-6 mt-4 text-gray-200">
    <li><strong className="text-red-300">Forum Participation</strong>
      <ul className="list-none ml-4 mt-2">
        <li>Helpful Member: Earn 10 upvotes on a single post (Reward: 20 Noir Coin®)</li>
        <li>Community Leader: Make 100 posts (Reward: Unique NFT - Community Leader Badge)</li>
        <li>Top Contributor: Receive 1000 upvotes in total (Reward: 300 Noir Coin® + Rare NFT)</li>
      </ul>
    </li>
    <li><strong className="text-red-300">Event Participation</strong>
      <ul className="list-none ml-4 mt-2">
        <li>Event Attendee: Join a live stream (Reward: 10 Noir Coin®)</li>
        <li>Active Participant: Ask a question during a Q&A (Reward: 25 Noir Coin®)</li>
        <li>Event Winner: Win a mini-game during an event (Reward: 50 Noir Coin® + Event-exclusive NFT)</li>
      </ul>
    </li>
  </ul>
</div>

    
    <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/challange.jpg') no-repeat center center / cover" }}>
  <h3 className="text-3xl font-bold mb-4 text-yellow-400">4. Special Challenges and Quests</h3>
  <p className="text-gray-300">Complete weekly and monthly challenges tailored for each game to earn rewards.</p>
  <ul className="list-disc list-inside ml-6 mt-4 text-gray-400">
    <li><strong className="text-yellow-400">Weekly Challenge:</strong> Play 5 matches in FreeCiv (Reward: 50 Noir Coin®)</li>
    <li><strong className="text-yellow-400">Monthly Quest:</strong> Complete the main campaign in Hedgewars (Reward: 300 Noir Coin® + Unique NFT - Hedgehog Hero)</li>
    <li><strong className="text-yellow-400">Special Quest:</strong> Gaming Marathon: Play 2 hours of each featured game in a month (Reward: 1000 Noir Coin® + Legendary NFT - Marathon Master)</li>
  </ul>
</div>


  </div>
</section>

      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl mb-10 text-white">Redemption and Marketplace</h2>
        <div className="text-left max-w-4xl mx-auto text-white space-y-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">NFT Redemption</h3>
            <p>NFTs earned can be viewed and managed in your profile. Use the marketplace to trade, sell, or buy additional NFTs.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Noir Coin® Redemption</h3>
            <p>Noir Coin® can be used to purchase in-game items, merchandise, and participate in exclusive events. Accumulate Noir Coin® to unlock higher-tier rewards and benefits.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NoirRewards;
