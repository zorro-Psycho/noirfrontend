"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [visibleAchievements, setVisibleAchievements] = useState(5);
  const [visibleGameSessions, setVisibleGameSessions] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/pages/login");
      return;
    }

    const fetchProfileData = async () => {
      const token = Cookies.get('token'); // Ensure token is available
      if (!token) {
        throw new Error('No token available');
      }
      try {
        const response = await fetch(
          "https://test-noir.vercel.app/api/Users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.trim()}`, // Include the token in the request headers
            },
            credentials: "include",
          }
        );
        console.log("token", token);
        console.log("response", response);
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfileData();
  }, [router]);

  const handleShowMoreAchievements = () => {
    setVisibleAchievements((prev) => prev + 5);
  };

  const handleShowLessAchievements = () => {
    setVisibleAchievements((prev) => (prev - 5 < 5 ? 5 : prev - 5));
  };

  const handleShowMoreGameSessions = () => {
    setVisibleGameSessions((prev) => prev + 5);
  };

  const handleShowLessGameSessions = () => {
    setVisibleGameSessions((prev) => (prev - 5 < 5 ? 5 : prev - 5));
  };

  const handleDeleteGameSession = async (sessionId) => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/pages/login");
      return;
    }

    try {
      const response = await fetch(
        `https://test-noir.vercel.app/api/Users/GameSessions/${sessionId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete game session");
      }

      // Remove the deleted session from the state
      setProfileData((prevData) => ({
        ...prevData,
        gameSessions: prevData.gameSessions.filter(
          (session) => session.id !== sessionId
        ),
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        Error: {error}
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">Loading...</div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <img
                src="/avatar.jpg"
                alt="Avatar"
                className="w-28 h-28 rounded-full"
              />
              <div className="pl-10">
                <h1 className="text-3xl font-bold">
                  {profileData.profile.username || "N/A"}
                </h1>
                <p className="text-gray-400">
                  {profileData.profile.email || "N/A"}
                </p>
                <p className="text-gray-400">
                  Joined:{" "}
                  {new Date(
                    profileData.profile.created_at
                  ).toLocaleDateString() || "N/A"}
                </p>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              {profileData.achievements.length > 0 ? (
                <ul>
                  {profileData.achievements
                    .slice(0, visibleAchievements)
                    .map((achievement) => (
                      <li key={achievement.title} className="mb-4">
                        <h3 className="text-lg font-bold">
                          {achievement.title}
                        </h3>
                        <p>{achievement.description || "N/A"}</p>
                        <p className="text-gray-400">
                          Earned on:{" "}
                          {new Date(
                            achievement.earned_at
                          ).toLocaleDateString() || "N/A"}
                        </p>
                      </li>
                    ))}
                </ul>
              ) : (
                <p>No achievements found.</p>
              )}
              {profileData.achievements.length > visibleAchievements && (
                <button
                  onClick={handleShowMoreAchievements}
                  className="text-blue-500"
                >
                  See More
                </button>
              )}
              {visibleAchievements > 5 && (
                <button
                  onClick={handleShowLessAchievements}
                  className="text-blue-500"
                >
                  See Less
                </button>
              )}
            </div>
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Game Sessions</h2>
              {profileData.gameSessions.length > 0 ? (
                <ul>
                  {profileData.gameSessions
                    .slice(0, visibleGameSessions)
                    .map((session) => (
                      <li
                        key={session.start_time}
                        className="mb-4 flex justify-between items-center"
                      >
                        <div>
                          <p>Game: {session.title || "N/A"}</p>
                          <p>
                            End Time:{" "}
                            {new Date(session.start_time).toLocaleString() ||
                              "N/A"}
                          </p>
                          <p>Score: {session.score || "N/A"}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteGameSession(session.id)}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                </ul>
              ) : (
                <p>No game sessions found.</p>
              )}
              {profileData.gameSessions.length > visibleGameSessions && (
                <button
                  onClick={handleShowMoreGameSessions}
                  className="text-blue-500"
                >
                  See More
                </button>
              )}
              {visibleGameSessions > 5 && (
                <button
                  onClick={handleShowLessGameSessions}
                  className="text-blue-500"
                >
                  See Less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
