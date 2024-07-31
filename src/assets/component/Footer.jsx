import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue text-white py-8">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <p className="text-sm text-blue-400">
                © Company Name 2020. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-400">
                Main Road, Building Name, Country
              </p>
              <a href="mailto:info@companyname.com" className="text-yellow-400 hover:text-yellow-500">
                info@companyname.com
              </a>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;
