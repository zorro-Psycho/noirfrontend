// pages/blog/index.js
import Header from '@/app/components/Header'; // Adjust the import path as per your project structure
import Footer from '@/app/components/Footer'; // Import Footer component if needed

// Example data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Exploring 0 AD: A Journey through Ancient History',
    date: 'June 15, 2024',
    category: 'Game Development',
    excerpt:
      'Delve into the historical context and development insights behind 0 AD, a unique RTS game.',
    slug: 'exploring-0-ad',
    author: {
      name: 'John Doe',
    },
    content: `
      <p>0 A.D. is a real-time strategy game that offers a unique experience in ancient warfare and civilization-building.</p>
      <p>Delve into the historical context and development insights behind 0 A.D., exploring how the game captures the essence of ancient civilizations through its gameplay mechanics and narrative.</p>
      <p>Learn about the challenges faced by developers and the innovations that have shaped 0 A.D. into a beloved title among strategy enthusiasts.</p>
    `,
  },
  {
    id: 2,
    title: 'Game Development Trends to Watch in 2024',
    date: 'June 10, 2024',
    category: 'Industry Trends',
    excerpt:
      'Explore the latest trends and innovations shaping the gaming industry in 2024 and beyond.',
    slug: 'game-development-trends-2024',
    author: {
      name: 'Jane Smith',
    },
    content: `
      <p>As the gaming industry evolves, new trends and innovations are reshaping the landscape. From augmented reality to cloud gaming, discover the key trends that developers and players should watch in 2024.</p>
      <p>Explore how advancements in technology are influencing game design, player engagement, and business models, paving the way for new opportunities and challenges in the gaming ecosystem.</p>
      <p>Gain insights into the future of gaming and how these trends are expected to impact the industry as it continues to grow and innovate.</p>
    `,
  },
  {
    id: 3,
    title: 'Latest News and Updates from Noir Game Zone',
    date: 'June 5, 2024',
    category: 'Updates',
    excerpt:
      'Stay informed with the latest news, updates, and insights from Noir Game Zone.',
    slug: 'latest-news-updates-noir-game-zone',
    author: {
      name: 'Noir Game Zone Team',
    },
    content: `
      <p>Explore the latest developments and updates from Noir Game Zone, including new game releases, community events, and partnerships.</p>
      <p>Stay informed about upcoming features, exclusive content, and opportunities to engage with the gaming community on our platform.</p>
      <p>Discover how Noir Game Zone is evolving to provide a dynamic and inclusive gaming experience for players worldwide.</p>
    `,
  },
  // Add more blog posts as needed
];

const featuredArticles = [
  {
    id: 4,
    title: 'The Evolution of Open-Source Gaming: A Paradigm Shift',
    date: 'May 25, 2024',
    category: 'Industry Trends',
    excerpt:
      'Discover the impact of open-source principles on the gaming industry and its future prospects.',
    slug: 'evolution-open-source-gaming',
    author: {
      name: 'Emily Johnson',
    },
    content: `
      <p>Open-source gaming has revolutionized how games are developed, distributed, and played. Learn about the history of open-source principles in gaming and their role in fostering innovation and community collaboration.</p>
      <p>Explore case studies of successful open-source games and how they have influenced mainstream gaming trends and practices.</p>
      <p>Gain insights into the future of open-source gaming and its potential to drive industry growth and creativity in the years to come.</p>
    `,
  },
  {
    id: 5,
    title: 'Interview with Indie Game Developer: Insights into Solo Development',
    date: 'May 20, 2024',
    category: 'Developer Interviews',
    excerpt:
      'Get firsthand insights from an indie game developer on challenges, inspirations, and advice for aspiring developers.',
    slug: 'interview-indie-game-developer',
    author: {
      name: 'David Clark',
    },
    content: `
      <p>Discover the journey of an indie game developer, from initial concept to launch. Learn about the challenges faced, creative inspirations, and lessons learned along the way.</p>
      <p>Explore tips and advice for aspiring indie developers looking to break into the gaming industry and create their own unique games.</p>
      <p>Gain insights into the indie game development process and how passion and perseverance can lead to success in the competitive world of gaming.</p>
    `,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url("/blog.jpg")' }}>
        <div className="bg-black bg-opacity-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Noir Game Zone Blog</h1>
            <p className="text-lg text-white mb-8 leading-relaxed text-center">
              Stay informed with the latest news, updates, and insights from the gaming world. Our blog covers a wide range of topics including game development, industry trends, and exclusive interviews with developers and players.
            </p>
            {/* Featured Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    <img
                      src={`https://picsum.photos/seed/${article.id}/400/250`}
                      alt={`Thumbnail for ${article.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="mb-4 flex items-center text-gray-600 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-4.95 11.95L14.95 6.05A7 7 0 0010 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-700">{article.excerpt}</p>
                      <a href={`/blog/${article.slug}`} className="text-blue-600 mt-4 inline-block hover:underline">
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Latest News and Updates */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Latest News and Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    <img
                      src={`https://picsum.photos/seed/${post.id}/400/250`}
                      alt={`Thumbnail for ${post.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="mb-4 flex items-center text-gray-600 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-4.95 11.95L14.95 6.05A7 7 0 0010 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-700">{post.excerpt}</p>
                      <a href={`/blog/${post.slug}`} className="text-blue-600 mt-4 inline-block hover:underline">
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Footer component here if needed */}
      <Footer /> {/* Example: Include Footer component at the bottom of the page */}
    </div>
  );
};

export default Blog;
