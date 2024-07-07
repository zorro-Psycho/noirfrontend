import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Define data for game categories
const gameCategories = [
  { name: 'Action', color: 'bg-yellow-300', image: '/shooting2.jpg' },
  { name: 'Strategy', color: 'bg-blue-300', image: '/strategy.jpg' },
  { name: 'Simulation', color: 'bg-green-300', image: '/sports.jpg' },
  { name: 'Adventure', color: 'bg-purple-300', image: '/adventure.jpg' },
  { name: 'Puzzle', color: 'bg-indigo-300', image: '/puzzle.jpg' },
  { name: 'Racing', color: 'bg-pink-300', image: '/racing.jpg' },
  { name: 'Sports', color: 'bg-orange-300', image: '/category.jpg' },
  // Add more categories as needed
];

export default function GameCategories() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Game Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {/* Game Categories Section */}
      <section className="relative py-20 px-8 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/game-category.jpg')` }}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Explore Game Categories</h1>
          <p className="text-xl text-white">Discover games across different genres.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => (
            <div key={index} className={`bg-white bg-opacity-75 shadow-lg rounded-lg p-8 text-center ${category.color}`}>
              <img src={category.image} alt={category.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-2 text-white">{category.name}</h3>
              <p className="text-gray-900">Discover games in the {category.name.toLowerCase()} genre.</p>
              <button className="mt-4 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 focus:outline-none">Explore {category.name}</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
