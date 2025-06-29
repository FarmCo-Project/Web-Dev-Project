import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/add-product", label: "Add Product" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const { getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();

  return (
    <nav className="bg-green-700 text-white px-6 py-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-green-100 transition-colors duration-300">
          Farmers Marketplace
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-green-100 transition-all duration-300 font-medium ${isActive ? 'text-green-100 font-semibold' : 'text-white'}`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-green-100 transition-all duration-300 font-medium flex items-center gap-2 ${isActive ? 'text-green-100 font-semibold' : 'text-white'}`
            }
          >
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-green-100 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
=== NAVBAR.JS - THE TOP NAVIGATION BAR ===

This is the "navigation bar" that sits at the top of every page!
It's like the header you see on any website - the main way users get around.

WHAT IT DOES:
- Provides navigation links to all major pages
- Shows the brand/logo (Farmers Marketplace)
- Displays cart count badge when items are in cart
- Handles active page highlighting
- Includes mobile menu button (for future mobile menu)
- Stays at the top when scrolling (sticky positioning)

THE NAVIGATION LINKS:
- Home: Landing page
- Products: Product catalog
- Add Product: Form for farmers
- About: Company information
- Cart: Shopping cart (with item count badge)

THE CART BADGE:
- Shows number of items in cart
- Only appears when cart has items (cartItemCount > 0)
- Red background with white text
- Rounded design for modern look
- Updates automatically when cart changes

THE ACTIVE PAGE HIGHLIGHTING:
- Uses NavLink from React Router
- Active page gets different styling (green-100 color)
- Font becomes semibold for active page
- Smooth transitions between states

THE RESPONSIVE DESIGN:
- Desktop: Full navigation menu visible
- Mobile: Hamburger menu button (prepared for mobile menu)
- Sticky positioning keeps navbar at top
- High z-index (z-50) ensures it stays above other content

THE STYLING:
- Green background (matches brand colors)
- White text with hover effects
- Shadow for depth
- Smooth transitions for all interactions
- Professional, clean design

THE MOBILE MENU:
- Currently just shows hamburger icon
- Could be expanded to show dropdown menu
- Hidden on desktop (md:hidden)
- Prepared for future mobile navigation

THE CART INTEGRATION:
- Uses CartContext to get cart item count
- Badge updates automatically when cart changes
- Links directly to cart page
- Visual feedback for cart status

This component is crucial for navigation - it's how users move around the entire app!
*/ 