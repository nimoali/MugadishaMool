import React, { useState } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: 'https://img.freepik.com/free-photo/ai-generated-pasta_23-2150637317.jpg?ga=GA1.2.1755721118.1716872895&semt=sph',
      alt: 'Pasta',
    },
    {
      img: 'https://img.freepik.com/free-photo/large-mixed-pizza-with-meat_140725-1274.jpg?ga=GA1.2.1755721118.1716872895&semt=sph',
      alt: 'Pizza',
    },
    {
      img: 'https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl_127032-1996.jpg?ga=GA1.2.1755721118.1716872895&semt=sph',
      alt: 'Salad',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">DISCOVER</h2>
      <h1 className="text-4xl font-bold mb-4">UPCOMING EVENTS</h1>
      <div className="relative w-3/4 max-w-lg h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between mt-4 w-1/4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
