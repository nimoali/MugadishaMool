import React from 'react';

const ReservationForm = () => {
    return (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black text-white p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">TRY IT TODAY</h2>
              <h3 className="text-lg font-medium">MOST POPULAR PASTA</h3>
            </div>
            <div className="bg-black text-white p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">TRY IT TODAY</h2>
              <h3 className="text-lg font-medium">MORE FUN MORE TASTE</h3>
            </div>
            <div className="bg-black text-white p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">TRY IT TODAY</h2>
              <h3 className="text-lg font-medium">FRESH & CHILI</h3>
            </div>
          </div>
    
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-4">RESERVATION</h2>
            <h1 className="text-5xl font-bold text-center mb-8">BOOK YOUR TABLE</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="people" className="block text-gray-700 font-bold mb-2">
                  People
                </label>
                <input
                  type="number"
                  id="people"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  FIND A TABLE
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

export default ReservationForm;
