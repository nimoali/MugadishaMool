// import React, { useState } from 'react';

// function MugadishoM() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showContact, setShowContact] = useState(false);

//   const toggleMenu = () => setShowMenu(!showMenu);
//   const toggleContact = () => setShowContact(!showContact);

//   return (<>
//     <div className="bg-green-500 min-h-screen">
//       <header className="container mx-auto flex items-center justify-between py-4">
//         <div className="flex items-center">
//           <img src="/logo.svg" alt="Italian Restaurant Logo" className="h-10" />
//           <h1 className="ml-4 text-2xl font-bold text-white">Italian Restaurant</h1>
//         </div>
//         <nav className="hidden md:flex space-x-6 text-white">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Menu</a>
//           <a href="#">Blog</a>
//           <a href="#">Store</a>
//           <a href="#" onClick={toggleContact}>Contact</a>
//         </nav>
//         <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </header>

//       <div className="container mx-auto flex flex-col items-center justify-center py-16">
//         <h2 className="text-4xl font-bold text-white">Delicious Italian Food</h2>
//         <p className="mt-4 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus nulla quis consectetur porttitor.</p>
//         <button className="mt-6 px-6 py-3 rounded-md bg-yellow-500 text-white font-bold hover:bg-yellow-600 focus:outline-none">Get Started</button>
//       </div>

//       <section className="container mx-auto bg-white py-16">
//         <h3 className="text-2xl font-bold mb-4">Most Popular Recipe</h3>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-1/3 px-4 mb-6">
//             <img src="https://img.freepik.com/free-photo/top-view-vegan-salad-with-fresh-ingredients-plate-pepper-black-cutting-board_179666-47300.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="Pasta" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="mt-4 font-bold">Pasta</h4>
//             <p className="text-gray-600">$30</p>
//           </div>
//           <div className="w-1/3 px-4 mb-6">
//             <img src="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="Hot Dog" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="mt-4 font-bold">Hot Dog</h4>
//             <p className="text-gray-600">$30</p>
//           </div>
//           <div className="w-1/3 px-4 mb-6">
//             <img src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10159.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="Hamburger" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="mt-4 font-bold">Hamburger</h4>
//             <p className="text-gray-600">$30</p>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto bg-yellow-400 py-16">
//         <h3 className="text-2xl font-bold mb-4 text-white">Order Now! and Get 50% Off</h3>
//         <p className="text-gray-200 mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <button className="px-6 py-3 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 focus:outline-none">Shop Now</button>
//       </section>

//       <section className="container mx-auto py-16">
//         <h3 className="text-2xl font-bold mb-4">Great Taste and Good Quality</h3>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <button className="px-6 py-3 rounded-md bg-yellow-500 text-white font-bold hover:bg-yellow-600 focus:outline-none">Shop Now</button>
//       </section>

//       <section className="container mx-auto bg-gray-100 py-16">
//         <h3 className="text-2xl font-bold mb-4">How it Works</h3>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <button className="px-6 py-3 rounded-md bg-yellow-500 text-white font-bold hover:bg-yellow-600 focus:outline-none">Get Started</button>
//       </section>

//       <section className="container mx-auto py-16">
//         <h3 className="text-2xl font-bold mb-4">Our Best Chef</h3>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <img src="/chef.jpg" alt="Chef" className="w-full h-48 object-cover rounded-md" />
//         <h4 className="mt-4 font-bold">Daniel Aiello</h4>
//         <p className="text-gray-600">Lead Chef</p>
//       </section>

//       <footer className="container mx-auto py-16 bg-gray-200">
//         <h4 className="text-lg font-bold mb-4">Contact Us</h4>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisi ut massa hendrerit maximus.</p>
//         <ul className="flex flex-wrap -mx-4">
//           <li className="w-1/2 px-4 mb-6">
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.502l-2.002-8.5a1 1 0 00-.502-.502L5 5.005a1 1 0 01.997-.007l.001-.001z" />
//               </svg>
//               <span>Phone: 555-555-5555</span>
//             </a>
//           </li>
//           <li className="w-1/2 px-4 mb-6">
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 5.23l-9.38 4.38a2 2 0 00-1.78 1.78l3.46 3.46a2 2 0 002.22 0L12 5.23l-1.38 3.38z" />
//               </svg>
//               <span>Email: info@italianrestaurant.com</span>
//             </a>
//           </li>
//         </ul>
//       </footer>

//       {showMenu && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white w-64 p-4 rounded-md">
//             <h4 className="text-lg font-bold mb-4">Menu</h4>
//             <ul>
//               <li className="mb-2">
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
//               </li>
//               </ul>
//       </div>
//       </div>)}
//       {/* <button
//         className="fixed bottom-0 right-0 px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none"
//         onClick={() => setShowMenu(!showMenu)}
//       ></button>
//       \end{code}
//       </div>
//       }</> */}
//       </div>
//       </>

// );

// }
// export default MugadishoM