import React from 'react';
import Tacos from '../component/Tocs'; // Make sure this path is correct
import Sides from '../component/Sides';
import Drinks from '../component/Drink';
function Menu() {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-[url('https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?ga=GA1.1.506855519.1703226778&semt=sph')] p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
        {/* Replace with your actual menu content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[url('https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?ga=GA1.1.506855519.1703226778&semt=sph')]">
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Appetizers</h2>
            <ul>
              <li className="mb-2">
                <span className="font-medium">Queso Fundido</span> - Melted cheese with chorizo
              </li>
              <li className="mb-2">
                <span className="font-medium">Guacamole</span> - Fresh avocado dip with lime and cilantro
              </li>
              <li>
                <span className="font-medium">Chips and Salsa</span> - House-made chips with a variety of salsas
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Main Courses</h2>
            <ul>
              <li className="mb-2">
                <span className="font-medium">Tacos</span> - Your choice of meat, fillings, and tortillas
              </li>
              <li className="mb-2">
                <span className="font-medium">Enchiladas</span> - Corn tortillas filled with your choice of meat and covered in sauce
              </li>
              <li>
                <span className="font-medium">Burritos</span> - Large flour tortillas filled with your choice of meat, beans, and rice
              </li>
            </ul>
          </div>
        </div>
        
       
      </div>
    </div>
     <Tacos />
     <Sides/>
     <Drinks/>
     </div>
  );
}

export default Menu;
