import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact Us</h2>
      
      {/* Restaurant Contact Information */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Flavors of Muqdisho</h3>
        <p className="text-gray-700 mb-2">Muqdisho Mall, Ground Floor, Suite 12</p>
        <p className="text-gray-700 mb-2">City: Muqdisho</p>
        <p className="text-gray-700 mb-2">Phone: (252) 123-456789</p>
        <p className="text-gray-700">Email: Flavors@Muqdisho.com</p>
      </div>
      
      {/* Images */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="https://thumbs.dreamstime.com/z/chalkboard-blackboard-concept-saying-contact-us-coffee-mobile-phone-82868670.jpg?ct=jpeg" alt="Muqdisho Mall Entrance" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src="https://thumbs.dreamstime.com/z/chalkboard-blackboard-concept-saying-contact-us-coffee-mobile-phone-82868670.jpg?ct=jpeg" alt="Muqdisho Mall Interior" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src="https://thumbs.dreamstime.com/z/chalkboard-blackboard-concept-saying-contact-us-coffee-mobile-phone-82868670.jpg?ct=jpeg" alt="Chicking Somalia Interior" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src="https://thumbs.dreamstime.com/z/chalkboard-blackboard-concept-saying-contact-us-coffee-mobile-phone-82868670.jpg?ct=jpeg" alt="Chicking Somalia Exterior" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Business Hours</h3>
        <p className="text-gray-700 mb-2">Monday - Friday: 9:00 AM - 10:00 PM</p>
        <p className="text-gray-700">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
      </div>
    </div>
  );
};

export default Contact;
