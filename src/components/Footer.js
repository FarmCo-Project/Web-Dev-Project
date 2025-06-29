import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-green-800 text-white py-16 mt-auto">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-bold mb-6">Farmers Marketplace</h3>
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
            <li><Link to="/add-product" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">Add Product</Link></li>
            <li><Link to="/about" className="text-green-100 hover:text-white transition-colors duration-300 text-lg">About</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-green-100 text-lg">
            <li className="flex items-center">
              <span className="mr-3">📧</span>
              info@farmersmarketplace.com
            </li>
            <li className="flex items-center">
              <span className="mr-3">📞</span>
              +254 700 000 000
            </li>
            <li className="flex items-center">
              <span className="mr-3">📍</span>
              Nairobi, Kenya
            </li>
            <li className="flex items-center">
              <span className="mr-3">🕒</span>
              Mon-Fri: 8AM-6PM
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-green-700 mt-12 pt-8 text-center">
        <p className="text-green-100 text-lg">
          © 2024 Farmers Marketplace. All rights reserved. | 
          <span className="ml-2">Supporting local agriculture across Kenya</span>
        </p>
        <p className="text-green-200 mt-2">
          Made with ❤️ for farmers and communities
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

/*
=== FOOTER.JS - THE BOTTOM FOOTER ===

This is the "footer" that sits at the bottom of every page!
It's like the footer you see on any website - with links, contact info, and branding.

WHAT IT DOES:
- Provides additional navigation links
- Shows company contact information
- Displays brand messaging and mission
- Includes copyright and legal information
- Adds visual balance to the page layout
- Stays at the bottom of the page (mt-auto)

THE FOOTER SECTIONS:
1. BRAND SECTION: Company name, description, and emoji icons
2. QUICK LINKS: Navigation links for easy access
3. CONTACT INFO: Email, phone, address, and hours
4. COPYRIGHT: Legal text and branding message

THE BRAND SECTION:
- Large company name (Farmers Marketplace)
- Mission statement about connecting farmers and consumers
- Four emoji icons representing agriculture and community
- Takes up 2 columns on desktop for prominence

THE QUICK LINKS:
- Same navigation links as the navbar
- Hover effects for better interactivity
- Easy access to main pages
- Consistent with site navigation

THE CONTACT INFORMATION:
- Email address with envelope emoji
- Phone number with phone emoji
- Physical address with location emoji
- Business hours with clock emoji
- All with consistent styling and spacing

THE COPYRIGHT SECTION:
- Legal copyright notice
- Additional branding message
- Heart emoji for personal touch
- Separated by border for visual distinction

THE DESIGN:
- Dark green background (matches navbar)
- White and light green text for contrast
- Responsive grid layout
- Proper spacing and typography
- Hover effects on interactive elements

THE RESPONSIVE LAYOUT:
- Mobile: Single column, stacked sections
- Desktop: Four-column grid layout
- Brand section spans 2 columns for emphasis
- Consistent spacing across all screen sizes

THE EMOJI ICONS:
- 🌾 (wheat): Represents farming and agriculture
- 🌱 (seedling): Represents growth and fresh produce
- 🤝 (handshake): Represents community and partnerships
- 💰 (money): Represents fair trade and economic benefits

This component provides important information and completes the page layout!
*/ 