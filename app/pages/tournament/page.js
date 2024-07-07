import Header from '@/app/components/Header'; // Adjust the import path as per your project structure
import Footer from '@/app/components/Footer'; // Import Footer component if needed

const tournamentsData = [
  {
    title: "Summer Showdown",
    date: "July 15, 2024",
    description: "Join the Summer Showdown and compete against the best players in intense matches to win exclusive prizes and Noir Coin®.",
    image: "/summer.jpg" // Replace with your image path
  },
  {
    title: "Winter Championship",
    date: "December 20, 2024",
    description: "The Winter Championship is here! Challenge top players and earn NFTs, Noir Coin®, and more.",
    image: "/tournament-bg.jpg" // Replace with your image path
  },
  {
    title: "Spring Invitational",
    date: "March 10, 2024",
    description: "Compete in the Spring Invitational for a chance to win exciting prizes and show off your skills.",
    image: "/spring.jpg" // Replace with your image path
  },
  {
    title: "Autumn Cup",
    date: "September 5, 2024",
    description: "Participate in the Autumn Cup and challenge the best players for exclusive rewards.",
    image: "/autumn-cup.jpg" // Replace with your image path
  },
];

const Tournament = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className="flex-1 bg-cover bg-center py-16 relative"
        style={{ backgroundImage: 'url("/tournament.jpg")', backgroundAttachment: 'fixed', height: '100vh' }} // Replace with your background image path
      >
        <div className="absolute top-0 w-full text-center text-5xl font-bold text-blue-600 py-6">
          Tournaments
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-blue-500 bg-opacity-60 shadow-lg rounded-lg w-11/12 max-w-4xl p-8 overflow-y-auto max-h-screen my-16">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">Tournaments</h1>
            <p className="text-lg text-center mb-10 text-white">
              Participate in exciting tournaments and challenge the best players to win prizes, NFTs, and Noir Coin®.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tournamentsData.map((tournament, index) => (
                <div key={index} className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden">
                  <img src={tournament.image} alt={tournament.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{tournament.title}</h3>
                    <p className="text-gray-700 mb-4">{tournament.date}</p>
                    <p className="text-gray-700 mb-6">{tournament.description}</p>
                    <a
                      href="#"
                      className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tournament;
