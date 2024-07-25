function Tacos(){
    return(<>

<div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Tacos</h1>
      <div className="flex justify-center mb-8">
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://img.freepik.com/free-photo/grilled-beef-steak-french-fries-salad-outdoor-table-generated-by-artificial-intelligence_188544-124669.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Tacos Poncitlan Logo" className="w-full rounded-lg mb-2" />
          <h2 className="text-xl font-bold mb-2">Taco w/ your choice of meat</h2>
          <p>Single soft corn tortilla, choice of meat, topped with onion & cilantro, and salsa.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/hotdog-with-ketchup-mustard-lettuce-wooden-table_2829-19789.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Asada Taco" className="w-full rounded-lg mb-2" />
          <h2 className="text-xl font-bold mb-2">Asada Taco</h2>
          <p>Tender grilled chuck steak, soft corn tortillas, topped with onion & cilantro, and whatever other toppings sound good (Guacamole)!</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/mexican-quesadilla-sliced-with-vegetables-sauces-table_2829-11742.jpg?ga=GA1.1.506855519.1703226778&semt=ais_user" alt="Shrimp Taco" className="w-full rounded-lg mb-2" />
          <h2 className="text-xl font-bold mb-2">Shrimp Taco</h2>
          <p>Zesty garlic shrimp, sautéed bell pepper and onions, served on soft corn tortillas, topped with sliced avocado, and sour cream.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style_2829-10159.jpg?ga=GA1.1.1755721118.1716872895&semt=sph" alt="Taco de Adobada" className="w-full rounded-lg mb-2" />
          <h2 className="text-xl font-bold mb-2">Taco de Adobada</h2>
          <p>Pork marinated in a homemade "red" chili sauce grilled to perfection, served on soft corn tortillas, topped with onion & cilantro, and salsa.</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Order Online</button>
      </div>
    </div>
    </>)
}

export default Tacos;