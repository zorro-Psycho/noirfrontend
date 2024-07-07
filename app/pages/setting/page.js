'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/pages/login');
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://backend-8v17.onrender.com/api/Users/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setUsername(data.profile.username);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfileData();
  }, [router]);

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const token = Cookies.get('token');
    try {
      const response = await fetch('https://backend-8v17.onrender.com/api/Users/update-username', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ newUsername })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      setSuccess('Username updated successfully');
      setUsername(newUsername);
      setNewUsername('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    const token = Cookies.get('token');
    try {
      const response = await fetch('https://backend-8v17.onrender.com/api/Users/update-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      setSuccess('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Settings</h1>

          {error && <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>}
          {success && <div className="bg-green-500 text-white p-3 rounded mb-4">{success}</div>}

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Change Username</h2>
            <form onSubmit={handleUsernameChange}>
              <div className="mb-4">
                <label htmlFor="current-username" className="block text-sm font-medium text-gray-300">Current Username</label>
                <input
                  type="text"
                  id="current-username"
                  value={username}
                  disabled
                  className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 text-gray-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="new-username" className="block text-sm font-medium text-gray-300">New Username</label>
                <input
                  type="text"
                  id="new-username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 text-gray-300"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Username
              </button>
            </form>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange}>
              <div className="mb-4">
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-300">Current Password</label>
                <input
                  type="password"
                  id="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm New Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 text-gray-300"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;




