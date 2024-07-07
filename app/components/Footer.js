// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-center">
      <div className="mb-6">
        <a href="/privacy-policy" className="text-blue-500 hover:text-blue-700 mx-4 transition">Privacy Policy</a>
        <a href="/terms-of-service" className="text-blue-500 hover:text-blue-700 mx-4 transition">Terms of Service</a>
      </div>
      <div className="mb-6">
        <form className="flex justify-center">
          <input type="email" placeholder="Sign up for our newsletter" className="p-2 rounded-l bg-gray-700 text-white border border-gray-600" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-700 transition">Subscribe</button>
        </form>
      </div>
      <div className="flex justify-center">
        {/* Social media icons */}
      </div>
    </footer>
  );
}

export default Footer;
