import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('./Gallary.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data.gallery))
      .catch((error) => console.error('Error fetching the gallery:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {images.map((image) => (
        <div key={image.id} className="max-w-xs m-4 p-4 border rounded-lg shadow-lg">
          <img src={image.url} alt={image.title} className="w-full h-auto object-cover rounded-lg" />
          <h3 className="mt-2 text-xl font-semibold">{image.title}</h3>
          <p className="text-gray-600">{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
