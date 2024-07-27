// src/Store.jsx

import React from 'react';

const Store = () => {
  const products = [
    {
      image: "https://via.placeholder.com/300x200.png?text=Pizza",
      name: "Pizza",
      description: "Delicious pizza with fresh ingredients.",
      price: "12.99",
    },
    {
      image: "https://via.placeholder.com/300x200.png?text=Spaghetti",
      name: "Spaghetti",
      description: "Classic spaghetti with marinara sauce.",
      price: "10.99",
    },
    {
      image: "https://via.placeholder.com/300x200.png?text=Fish+Dish",
      name: "Fish Dish",
      description: "Fresh fish served with vegetables.",
      price: "8.99",
    },
    {
      image: "https://via.placeholder.com/300x200.png?text=Fruit+Salad",
      name: "Fruit Salad",
      description: "A healthy and colorful fruit salad.",
      price: "9.99",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Restaurant Store</h1>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Menu</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-800 mt-4 font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Order Now</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-600 text-center">&copy; 2024 Restaurant Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Store;
