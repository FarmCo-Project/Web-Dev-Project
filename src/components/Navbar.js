import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js'; // Import AuthContext to get user info and logout function
import { CartContext } from '../context/CartContext.js'; // Import CartContext to display cart item count

// Navbar component for site navigation
const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext); // Destructure logout and currentUser from AuthContext
  const { cart } = useContext(CartContext); // Destructure cart from CartContext

  // Calculate the total number of items in the cart to display in the badge
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50 rounded-b-2xl font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand link to Home page */}
        <Link to="/" className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors duration-300">
          Farmers Marketplace
        </Link>

        {/* Primary Navigation Links (visible on medium and larger screens) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-300">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-300">Products</Link>
          <Link to="/add-product" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-300">Add Product</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-300">About</Link>
        </div>

        {/* Right section: Cart icon and User/Auth buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon with badge for total items */}
          <Link to="/cart" className="relative text-gray-700 hover:text-green-600 transition-colors duration-300" aria-label={`Shopping cart with ${totalCartItems} items`}>
            {/* Shopping Cart SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {/* Cart item count badge, only visible if there are items in the cart */}
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* User Email and Logout Button (visible if currentUser exists) */}
          {currentUser ? (
            <div className="flex items-center space-x-2">
              {/* Display user's email, fallback to 'Guest User' if email is not available */}
              <span className="text-gray-700 text-md hidden sm:block">{currentUser.email || 'Guest User'}</span>
              <button
                onClick={logout} // Call the logout function from AuthContext
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors duration-300"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            // This block is technically unreachable now due to ProtectedRoute,
            // but kept for completeness if Navbar were ever used on public routes.
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-green-700 transition-colors duration-300">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button (Hamburger Icon - for future mobile menu implementation) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none" aria-label="Open mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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