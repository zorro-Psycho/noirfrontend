import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Define data for featured games including images
const featuredGames = [
  { name: '0 AD', description: 'A real-time strategy game set in the ancient world.', image: '/0AD.jpg' },
  { name: 'Battle for Wesnoth', description: 'A turn-based tactical strategy game with a high fantasy theme.', image: '/battle-of-wisnoth.jpg' },
  { name: 'Super Tux Kart', description: 'A 3D open-source arcade racing game.', image: '/img3.jpg' },
  { name: 'Super Tux', description: 'A side-scrolling platform game featuring Tux, the Linux mascot.', image: '/supertux.jpg' },
  { name: 'Xonotic', description: 'A fast-paced first-person shooter.', image: '/img5.jpg' },
  // Add more featured games with images as needed
];

const gameReviews = [
  { game: '0 AD', review: 'An immersive strategy experience with great historical detail.', reviewer: 'Gaming Weekly' },
  { game: 'Battle for Wesnoth', review: 'A fantastic tactical game with endless replay value.', reviewer: 'Fantasy Gamer' },
  // Add more reviews as needed
];

const testimonials = [
  { quote: 'The best place to find top-tier open-source games.', person: 'Jane Doe' },
  { quote: 'An incredible selection of games for all tastes and ages.', person: 'John Smith' },
  // Add more testimonials as needed
];

export default function FeaturedGames() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Featured Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {/* Featured Games Section */}
      <section className="relative py-20 px-8 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/game.jpg')` }}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Explore Featured Games</h1>
          <p className="text-xl text-white">A collection of the best games for you to enjoy.</p>
          <button className="mt-6 px-8 py-4 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 focus:outline-none">Start Playing</button>
        </div>

        <div className="w-full mt-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Featured Games</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {featuredGames.map((game, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs transform hover:scale-105 transition-transform">
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{game.name}</h3>
                  <p className="text-gray-700">{game.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-600">Learn More</span>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">Play Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Reviews Section */}
      <section className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Game Reviews</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {gameReviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-md">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{review.game}</h3>
              <p className="text-gray-700 italic">"{review.review}"</p>
              <p className="text-gray-700 text-right">- {review.reviewer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-8 bg-gray-200">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">User Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-md">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-700 text-right">- {testimonial.person}</p>
            </div>
          ))}
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
