import Header from '@/app/components/Header'; // Adjust the import path as per your project structure
import Footer from '@/app/components/Footer'; // Import Footer component if needed

const Leaderboard = () => {
  // Sample data for leaderboard (replace with actual data or API fetch)
  const leaderboardData = [
    { rank: 1, playerName: "Player 1", score: 1500 },
    { rank: 2, playerName: "Player 2", score: 1400 },
    { rank: 3, playerName: "Player 3", score: 1300 },
    { rank: 4, playerName: "Player 4", score: 1200 },
    { rank: 5, playerName: "Player 5", score: 1100 },
    { rank: 6, playerName: "Player 6", score: 1000 },
    { rank: 7, playerName: "Player 7", score: 950 },
    { rank: 8, playerName: "Player 8", score: 900 },
    { rank: 9, playerName: "Player 9", score: 850 },
    { rank: 10, playerName: "Player 10", score: 800 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className="flex-1 bg-cover bg-center py-16 relative"
        style={{ 
          backgroundImage: 'url("/leaderboard.jpg")', 
          backgroundAttachment: 'fixed', 
          height: '100vh', 
          opacity: '0.8' // Adjust opacity for transparency
        }}
      >
        <div className="absolute top-0 w-full text-center text-5xl font-bold text-green-600 py-6">
          Leaderboard
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg w-11/12 max-w-4xl p-8 overflow-y-auto max-h-screen my-16">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Leaderboard</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">#</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Player Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaderboardData.map((player, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap">{player.rank}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.playerName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{player.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
