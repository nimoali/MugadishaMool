import React from 'react';

function Sides() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Sides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="https://img.freepik.com/free-photo/view-homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-fallen-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-139649.jpg?ga=GA1.1.506855519.1703226778&semt=sph" alt="Tacos Poncitlan Logo" className="w-full rounded-lg mb-2" />
          <h3 className="text-xl font-bold mb-2">Chips & Salsa</h3>
          <p className="text-gray-700">Freshly made tortilla chips served with your choice of salsa.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="https://img.freepik.com/free-photo/guacamole-dip_144627-26998.jpg?ga=GA1.1.506855519.1703226778&semt=sph" alt="Tacos Poncitlan Logo" className="w-full rounded-lg mb-2" />
          <h3 className="text-xl font-bold mb-2">Chips & Guac</h3>
          <p className="text-gray-700">Crispy tortilla chips served with our creamy and flavorful guacamole.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src="https://img.freepik.com/free-photo/fried-rice-with-sausage_1339-8075.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Tacos Poncitlan Logo" className="w-full rounded-lg mb-2" />
          <h3 className="text-xl font-bold mb-2">Rice and Beans 8oz</h3>
          <p className="text-gray-700">A classic combination of fluffy rice and flavorful beans.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Online</button>
      </div>
    </div>
  );
}

export default Sides;