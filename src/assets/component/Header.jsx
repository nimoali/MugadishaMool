import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
          <div className="container mx-auto bg-red rounded-lg shadow-md p-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-4 text-green-600">
              Delicious Italian Food
            </h1>
            <nav className="flex justify-center mb-8">
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
              <Link to="/">Home</Link>
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
              <Link to="/About">About</Link>
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
              <Link to="/menu">Menu</Link>
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
                <Link to="/gallary">Gallary</Link>
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
              <Link to="/Store">Store</Link>
              </a>
              <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out">
              <Link to="/Contact">Contact</Link>
              </a>
            </nav>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/gallary">Get Started</Link> Get Started
            </button>
          </div>
       
  );
}

export default Header;
