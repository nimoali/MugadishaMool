import React from 'react';

function Popularone() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-16">
        Most Popular Recipe
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.
      </p>
      <div className="flex justify-center mb-8">
        <a href="#" className="text-lg text-gray-600 hover:text-green-600 transition duration-300 ease-in-out mr-4">
          www
        </a>
      </div>
      <div className='flex justify-between gap-7'>
      <div className="flex flex-col items-center mb-8">
        <img src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10159.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="" />
        <h2 className="text-2xl font-bold mb-4">Pasta</h2>
        <p className="text-lg text-gray-600 mb-4">$30</p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <img src="https://img.freepik.com/free-photo/hot-dogs-arrangement-box-high-angle_23-2148768179.jpg?ga=GA1.1.1755721118.1716872895&semt=ais_user" alt="" />
        <h2 className="text-2xl font-bold mb-4">Hot Dog</h2>
        <p className="text-lg text-gray-600 mb-4">$30</p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <img src="https://img.freepik.com/free-photo/beef-burger-with-ingredients_141793-16645.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="" />
        <h2 className="text-2xl font-bold mb-4">Hamburger</h2>
        <p className="text-lg text-gray-600 mb-4">$30</p>
      </div>
      </div>
    </div>
  );
}

export default Popularone;
