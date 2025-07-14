import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

const Footer = () => {
  const { currentUser } = useContext(AuthContext);
  const isFarmer = currentUser?.role === 'farmer';

  return (
    <footer className="bg-green-800 text-white py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6">FarmCo App</h3>
            <p className="text-green-100 mb-6 text-lg leading-relaxed">
              Connecting local farmers with consumers for fresh, sustainable produce. 
              Supporting community agriculture and fair trade practices across Kenya.
            </p>
            <div className="flex space-x-6">
              <span className="text-3xl">🌾</span>
              <span className="text-3xl">🌱</span>
              <span className="text-3xl">🤝</span>
              <span className="text-3xl">💰</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">Home</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">Products</Link></li>
              {isFarmer && (
                <li><Link to="/add-product" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">Add Product</Link></li>
              )}
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-green-100 text-lg">
              <li className="flex items-center">
                <span className="mr-3">📧</span>
                info@farmcoapp.com
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                +254 700 000 000
              </li>
              <li className="flex items-center">
                <span className="mr-3">📍</span>
                Nairobi, Kenya
              </li>

            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-green-100 text-lg">
            © 2025 FarmCo App. All rights reserved. | 
            <span className="ml-2">Supporting local agriculture across Kenya</span>
          </p>
          <p className="text-green-200 mt-2">
            Made with ❤️ for farmers and communities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;