import React from "react";

const About = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About Farmers Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building a bridge between local farmers and consumers, creating a sustainable marketplace 
            that benefits everyone in the community.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-green-700 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            We're building a bridge between local farmers and consumers, creating a sustainable marketplace 
            that benefits everyone in the community. Our platform empowers farmers to reach customers directly 
            while providing consumers with access to fresh, high-quality produce.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-700">For Farmers</h3>
              <ul className="text-gray-700 space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Direct access to customers without middlemen
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Fair pricing for your products
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Easy product listing and management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Support for local agriculture
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">For Customers</h3>
              <ul className="text-gray-700 space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">✓</span>
                  Fresh, locally-grown produce
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">✓</span>
                  Transparent pricing and sourcing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">✓</span>
                  Support for local farmers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">✓</span>
                  Convenient shopping experience
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Local Focus</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Supporting farmers in your community and strengthening local economies</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Fresh Quality</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Ensuring the highest quality produce delivered directly from farm to table</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Fair Trade</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Promoting fair prices and ethical practices for both farmers and customers</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Local Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Ready to Join Our Community?</h2>
          <p className="text-gray-700 mb-8 text-lg text-center max-w-2xl mx-auto">
            Whether you're a farmer looking to sell your products or a customer wanting fresh, local produce, 
            we're here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/products" 
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              Browse Products
            </a>
            <a 
              href="/add-product" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              List Your Products
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

/*
=== ABOUT.JS - THE COMPANY STORY PAGE ===

This is the "about us" page that tells the story of our Farmers Marketplace!
It's like the "who we are" section you'd find on any company website.

WHAT IT DOES:
- Tells the story and mission of the Farmers Marketplace
- Explains what we do for both farmers and customers
- Shows our core values and principles
- Displays impressive statistics to build trust
- Provides clear calls-to-action for both user types
- Builds credibility and explains the platform's purpose

THE SECTIONS:
1. HERO: Big title and mission statement
2. MISSION: Detailed explanation with benefits for farmers and customers
3. VALUES: Three core principles with icons and descriptions
4. STATS: Social proof with impressive numbers
5. CTA: Final call-to-action for both user types

THE MISSION SECTION:
- Explains the bridge between farmers and consumers
- Two-column layout showing benefits for each group
- Green background for farmers, blue for customers
- Checkmark lists for easy scanning

THE VALUES SECTION:
- Three key principles: Local Focus, Fresh Quality, Fair Trade
- Each value has an icon, title, and description
- Hover effects for interactivity
- Consistent design with the rest of the site

THE STATS SECTION:
- Gradient background for visual appeal
- Four key metrics: farmers, products sold, communities, satisfaction
- Large numbers for impact
- Builds trust and credibility

THE USER JOURNEY:
- Visitors learn about the platform's mission
- Understand benefits for their specific role
- See social proof through statistics
- Get clear next steps through CTAs

THE DESIGN:
- Consistent with the rest of the site
- Good use of whitespace and typography
- Hover effects and transitions
- Responsive design for all screen sizes

This page is crucial for building trust and explaining the platform's value proposition!
*/ 