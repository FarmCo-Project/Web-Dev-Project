import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-green-800 leading-tight">
            Welcome to Farmers Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect directly with local farmers. Buy fresh, organic produce and support your community's agricultural economy.
          </p>
        </div>
        
        {/* Call to Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-6 text-green-700">For Customers</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Browse fresh, locally-grown products from trusted farmers in your area. 
              Get the best quality produce delivered to your doorstep.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse Products
            </Link>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">For Farmers</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              List your fresh produce and reach customers directly through our platform. 
              Grow your business and support your community.
            </p>
            <Link 
              to="/add-product" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Product
            </Link>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Farmers Marketplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Fresh & Local</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Direct from farm to your table with maximum freshness and quality</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Support Farmers</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Help local agriculture thrive and strengthen your community</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Fair Prices</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Competitive pricing that benefits both farmers and customers</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Local Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-16 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of farmers and customers already using our platform</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/products" 
              className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-lg"
            >
              Start Shopping
            </Link>
            <Link 
              to="/add-product" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 text-lg font-semibold"
            >
              List Your Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

/*
=== HOME.JS - THE LANDING PAGE ===

This is the "front door" of our Farmers Marketplace! It's the first thing users see
when they visit our site, so it needs to be welcoming and guide them to the right place.

WHAT IT DOES:
- Welcomes users with a big, friendly hero section
- Explains what the marketplace is about
- Provides clear paths for two different user types (customers vs farmers)
- Shows off our key features and benefits
- Displays impressive stats to build trust
- Ends with a strong call-to-action to get users started

THE SECTIONS:
1. HERO: Big welcome message with value proposition
2. CTA CARDS: Two cards - one for customers, one for farmers
3. FEATURES: Three key benefits with icons and descriptions
4. STATS: Social proof with impressive numbers
5. FINAL CTA: Bottom section encouraging action

THE USER JOURNEY:
- Customer sees "Browse Products" → clicks → goes to Products page
- Farmer sees "Add Product" → clicks → goes to AddProduct page
- Both see the benefits and stats to build confidence

DESIGN FEATURES:
- Gradient background for visual appeal
- Hover effects on cards (lift up, shadow changes)
- Responsive design (looks good on mobile and desktop)
- Green/blue color scheme (agriculture + trust)
- Large, readable text with good spacing

This page is crucial because it's often the first impression users get of our platform!
*/ 