'use client';

import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQs - NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frequently Asked Questions about NOIR GAME ZONE" />
      </Head>
      <Header />
      <section className="relative bg-scroll text-center bg-cover bg-bottom bg-no-repeat py-10" style={{ backgroundImage: 'url(/bg0.jpeg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-8">
          <h1 className="text-5xl font-bold text-white">FAQs</h1>
          <p className="text-2xl text-white mt-4">Get answers to your questions about Noir Game Zone</p>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900 text-center text-white" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1)), url('/Faq-bg.jpg') no-repeat center center / cover" }}>
        <h2 className="text-yellow-300 text-4xl mb-10 font-bold text-center tracking-wide font-serif">Frequently Asked Questions</h2>
        <div className="text-left max-w-4xl mx-auto space-y-10">
          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Faqgenral.jpg') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-blue-300">General</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">1. What is Noir Game Zone?</h4>
                <p className="text-gray-200">Noir Game Zone is an innovative online gaming platform by The Noir Soul Syndicate that allows users to play a variety of games, earn NFTs, and collect Noir Coin®.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">2. What types of games are available on Noir Game Zone?</h4>
                <p className="text-gray-200">We offer a wide range of games including action, strategy, simulation, adventure, puzzle, racing, and sports games such as 0 AD, Battle for Wesnoth, Super Tux Kart, Xonotic, and more.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">3. How do I sign up for Noir Game Zone?</h4>
                <p className="text-gray-200">You can sign up by visiting our website and clicking on the 'Sign Up' button. Follow the instructions to create your account.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">4. Is Noir Game Zone free to use?</h4>
                <p className="text-gray-200">Yes, joining and playing games on Noir Game Zone is free. However, some premium features and in-game items may require Noir Coin®.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Faqgame.jpg') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-green-300">Gameplay</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">5. How do I start playing a game?</h4>
                <p className="text-gray-200">After logging in, navigate to the 'Games' section, choose a game you want to play, and click 'Play Now'. Follow the prompts to launch the game.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">6. Can I play games on Noir Game Zone with friends?</h4>
                <p className="text-gray-200">Yes, many of our games support multiplayer modes. You can invite friends to join your game or connect with new players through the platform.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">7. What are achievements and how do I earn them?</h4>
                <p className="text-gray-200">Achievements are milestones you can earn by completing specific tasks or reaching certain goals in games. Each game has its own set of achievements with corresponding rewards.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Faqnft.jpg') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-red-300">NFTs and Noir Coin®</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">8. What are NFTs in Noir Game Zone?</h4>
                <p className="text-gray-200">NFTs (Non-Fungible Tokens) in Noir Game Zone are unique digital assets that represent ownership of in-game items, achievements, or exclusive content. They can be collected, traded, and sold.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">9. How do I earn Noir Coin®?</h4>
                <p className="text-gray-200">You can earn Noir Coin® by achieving milestones in games, participating in tournaments, engaging in community activities, and completing special challenges and quests.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">10. How can I use Noir Coin®?</h4>
                <p className="text-gray-200">Noir Coin® can be used to purchase in-game items, exclusive NFTs, merchandise from our shop, and to enter premium events or tournaments.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">11. What is the NFT marketplace?</h4>
                <p className="text-gray-200">The NFT marketplace is where you can buy, sell, and trade NFTs with other users. You can access the marketplace from your profile or the main menu.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Faqcom.jpg') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-purple-300">Community</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">12. How do I participate in community events?</h4>
                <p className="text-gray-200">Community events are announced on our Events page and through notifications. Simply join the event from the event page and follow the instructions to participate.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">13. What are leaderboards and how do they work?</h4>
                <p className="text-gray-200">Leaderboards rank players based on their performance in games. You can check your ranking and see how you compare with other players globally.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">14. Can I join tournaments on Noir Game Zone?</h4>
                <p className="text-gray-200">Yes, we regularly host tournaments for various games. You can join tournaments by visiting the Tournaments section and registering for the event.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/FaqTech.png') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-cyan-300">Technical Support</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">15. What should I do if I encounter a technical issue?</h4>
                <p className="text-gray-200">If you encounter any technical issues, visit our Technical Support page, and follow the troubleshooting steps or contact our support team for assistance.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">16. How can I contact customer support?</h4>
                <p className="text-gray-200">You can contact our customer support team by visiting the Contact Us page and filling out the form or using the provided contact information.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Faqaccount.jpg') no-repeat center center / cover" }}>
            <h3 className="text-3xl font-bold mb-4 text-orange-300">Account Management</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">17. How do I update my profile information?</h4>
                <p className="text-gray-200">To update your profile information, log in to your account, go to the 'Profile' section, and edit your details.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">18. How do I reset my password?</h4>
                <p className="text-gray-200">If you need to reset your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset it.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">19. Can I change my username?</h4>
                <p className="text-gray-200">Yes, you can change your username by going to the 'Settings' section in your profile and updating your username. Note that username changes may be limited to prevent abuse.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-300">20. How do I manage my privacy settings?</h4>
                <p className="text-gray-200">To manage your privacy settings, log in to your account, go to 'Settings', and adjust your privacy preferences as needed.</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg0.jpeg') no-repeat center center / cover" }}>
  <div className="max-w-3xl mx-auto">
    <p className="text-lg">
      These FAQs cover various aspects of the Noir Game Zone platform, providing essential information for new and existing users. If you have additional questions, feel free to reach out to our support team for further assistance. <strong className='text-orange-400'> Happy gaming!</strong>
    </p>
  </div>
</div>
        </div>
      </section>
     

      <Footer />
    </>
  );
};

export default FAQ;
