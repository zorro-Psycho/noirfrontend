import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Customer Support',
    email: 'john.doe@example.com',
    image: '/contact.jpeg'
  },
  {
    name: 'Jane Smith',
    role: 'Technical Support',
    email: 'jane.smith@example.com',
    image: '/contact.png'
  },
  {
    name: 'Sam Wilson',
    role: 'Billing Support',
    email: 'sam.wilson@example.com',
    image: '/contact.jpeg'
  },
  {
    name: 'Jane Smith',
    role: 'Technical Support',
    email: 'jane.smith@example.com',
    image: '/contact.png'
  },
  {
    name: 'Sam Wilson',
    role: 'Billing Support',
    email: 'sam.wilson@example.com',
    image: '/contact.jpeg'
  }
];

const Contact = () => {
  return (<>
    <Header/>
    <div className="  relative bg-scroll text-center bg-cover bg-left bg-no-repeat py-10" style={{ backgroundImage: 'url(/contactbg.jpg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">Contact Us</h1>
      
        <p className="text-2xl text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 p-10 text-white mb-12 rounded-lg shadow-md ">
  Have a question or need assistance? Reach out to our support team for help.
</p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
  {teamMembers.map((member, index) => (
    <div key={index} className="bg-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* <div className="relative h-56 w-full"> */}
        <img src={member.image} alt={member.name} className=" w-full object-cover " />
      {/* </div> */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.role}</p>
        <a href={`mailto:${member.email}`} className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
          {member.email}
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
