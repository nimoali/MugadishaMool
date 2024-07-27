// src/About.jsx

import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Welcome to our restaurant, where we offer a unique dining experience with a fusion of flavors and cultures. Our chefs are passionate about creating delicious dishes using fresh, high-quality ingredients. We believe in providing an unforgettable experience for our guests, whether they are dining in or enjoying our takeout options.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our restaurant is not just about food; it's about bringing people together and celebrating life’s moments. We take pride in our friendly and welcoming atmosphere, perfect for families, friends, and anyone looking to enjoy a great meal. Join us and discover the flavors that make us special!
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1722097917~exp=1722101517~hmac=431d556f1487a7cbb27f09559993e6f8b64424e5dbb58ff8f559ea158725a42d&w=740" alt="Delicious Dish 1" className="rounded-lg shadow-lg" />
              <img src="https://img.freepik.com/free-photo/assortment-different-fresh-vegetables_23-2148655292.jpg?size=626&ext=jpg&ga=GA1.1.1882855161.1709021621&semt=sph" alt="Delicious Dish 2" className="rounded-lg shadow-lg" />
              <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&uid=R142733064&ga=GA1.1.1882855161.1709021621&semt=sph" alt="Delicious Dish 3" className="rounded-lg shadow-lg" />
              <img src="https://img.freepik.com/premium-photo/classic-burger-with-lettuce-tomato-wooden-table_311379-1450.jpg?size=626&ext=jpg&uid=R142733064&ga=GA1.1.1882855161.1709021621&semt=sph" alt="Delicious Dish 4" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
