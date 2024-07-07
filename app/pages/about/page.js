import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative">
          {/* Background Image Section covering the upper half */}
          <div
            className="relative h-[140vh] bg-cover bg-center"
            style={{ backgroundImage: `url('/bg2.jpg')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-8 p-6 md:p-12">
              <h1 className="text-5xl font-bold mb-4 text-indigo-400">About Us</h1>
              <p className="text-lg text-indigo-200 max-w-3xl text-center">
                Experience the thrill of competition, the joy of discovery, and the power of community. We are dedicated to pushing the boundaries of gaming innovation and creating unforgettable experiences for players worldwide.
              </p>

              {/* Card Section for Mission and Vision side by side */}
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-5xl">
                <div className="bg-gray-800 bg-opacity-75 rounded-lg p-8 shadow-lg flex-1 text-indigo-200">
                  <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Our Mission</h2>
                  <p className="text-lg">
                    To empower gamers and artists by providing an inclusive platform that embraces diversity and fosters innovation in the gaming industry.
                  </p>
                </div>

                <div className="bg-gray-800 bg-opacity-75 rounded-lg p-8 shadow-lg flex-1 text-indigo-200">
                  <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Our Vision</h2>
                  <p className="text-lg">
                    To revolutionize gaming by creating a dynamic ecosystem where creativity, technology, and community converge for unparalleled experiences.
                  </p>
                </div>
              </div>

              {/* Join Us Section */}
              <div className="max-w-7xl mx-auto py-16 px-6 flex justify-center">
                <section className="bg-gray-800 bg-opacity-75 rounded-lg p-8 shadow-lg text-center text-indigo-200">
                  <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Join Us</h2>
                  <p className="text-md mb-8">
                    Ready to join a community of passionate gamers and creators? Connect with us today and be part of something extraordinary.
                  </p>
                  <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                    Get Started
                  </a>
                </section>
              </div>

              {/* Uncomment and edit the Card Section for Values if needed */}
              {/* <div className="bg-gray-800 bg-opacity-75 rounded-lg p-8 shadow-lg w-full max-w-5xl">
                <h2 className="text-3xl font-semibold mb-4 text-indigo-400">Our Values</h2>
                <ul className="text-lg text-indigo-200">
                  <li className="mb-3">
                    <span className="text-blue-500 mr-2">&#9679;</span> Diversity: Embracing inclusivity in gaming.
                  </li>
                  <li className="mb-3">
                    <span className="text-yellow-500 mr-2">&#9679;</span> Innovation: Leading through technology and creativity.
                  </li>
                  <li className="mb-3">
                    <span className="text-green-500 mr-2">&#9679;</span> Community: Building a passionate gaming community.
                  </li>
                  <li className="mb-3">
                    <span className="text-pink-500 mr-2">&#9679;</span> Excellence: Striving for the best in everything we do.
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
