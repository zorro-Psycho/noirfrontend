"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Header from './components/Header';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = { email, username, password };

    try {
      console.log('Sending payload:', payload);
      const response = await fetch('http://localhost:5000/api/Users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        router.push('/Users/login');// give correct api address of login page then it will redirect to login page; 
        alert('User registered successfully');
      } else {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        if (errorData.message.includes('duplicate key value')) {
          setError('Username already taken. Please choose a different username.');
        } else {
          setError(errorData.message || 'Registration failed. Please check your details.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Register - NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Register for NOIR GAME ZONE" />
      </Head>
      <Header />
      <div 
        className="flex items-center justify-center min-h-screen bg-cover bg-center relative" 
        style={{ backgroundImage: 'url(/bg3.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg relative z-10">
          <h1 className="text-4xl font-bold text-center text-blue-500">Welcome to NOIR GAME ZONE</h1>
          <h2 className="text-3xl font-bold text-center text-white mt-4">Register</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
            <div className="text-center text-white mt-4">
              <p>Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;


