"use client"
import Header from '@/app/components/Header'; // Adjust the import path as per your project structure
import Footer from '@/app/components/Footer'; // Import Footer component if needed
import { useState } from 'react';

const TechnicalSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API or email
    alert('Your issue has been submitted. Our support team will contact you shortly.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("/technical.jpg")' }} // Replace with your background image path
      >
        <div className="bg-black bg-opacity-50 py-12 px-4 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-white bg-opacity-80 shadow-md rounded-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Technical Support</h1>
            <p className="text-lg text-center mb-8 leading-relaxed">
              Experiencing technical issues? Our dedicated technical support team is here to resolve any problems you encounter. Please fill out the form below with details about the issue you're facing.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">Issue</label>
                <input
                  type="text"
                  name="issue"
                  id="issue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Details</label>
                <textarea
                  name="details"
                  id="details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="6"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;
