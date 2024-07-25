import React from 'react';

function Drinks() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Drinks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/mint-blue-orange-drinks-sliced-citrus-white-flowers-coconut_23-2148145379.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Agua Fresca" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">Agua Fresca</h3>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/fresh-summer-cocktail-pina-colada-fresh-summer-drink-concept_185193-109325.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Jarrito" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">Jarrito</h3>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?ga=GA1.1.506855519.1703226778&semt=sph" alt="Coffee" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">Coffee</h3>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Online</button>
      </div>
    </div>
  );
}

export default Drinks;