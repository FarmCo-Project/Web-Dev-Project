import React, { useContext } from "react";
import ProductCard from "../components/ProductCard.js";
import { ProductContext } from "../context/ProductContext.js";
import { AuthContext } from "../context/AuthContext.js";

export default function Products() {
  const { products } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  // Check if the current user is a farmer
  const isFarmer = currentUser?.role === 'farmer';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* This is where we welcome folks to our marketplace! */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Fresh Farm Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the finest selection of locally-grown produce from trusted farmers in your community
          </p>
        </div>

        {/* Here's where we show all the products, or a friendly message if there aren't any yet */}
        {products.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-lg p-16 max-w-md mx-auto">
              <div className="text-6xl mb-6">🌾</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Products Available</h2>
              <p className="text-gray-600 mb-8">
                {isFarmer 
                  ? "Be the first to add a product to our marketplace!" 
                  : "No products are currently available from our farmers. Please check back later!"
                }
              </p>
              {/* Only show "Add Your First Product" button for farmers */}
              {isFarmer && (
                <a 
                  href="/add-product" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold"
                >
                  Add Your First Product
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* Only show the "Are You a Farmer?" card for farmers when there are products */}
        {products.length > 0 && isFarmer && (
          <div className="text-center mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Are You a Farmer?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join our community and start selling your fresh produce to customers in your area.
              </p>
              <a 
                href="/add-product" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
              >
                List Your Products
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/*
=== PRODUCTS.JS - THE PRODUCT CATALOG ===

This is the "storefront" of our marketplace! It's where customers browse all available
products and where farmers can see what others are selling.

WHAT IT DOES:
- Displays all products in a beautiful, responsive grid
- Shows different messages based on user role when no products exist
- Encourages farmers to add products when the marketplace is empty
- Provides a call-to-action for farmers at the bottom (only for farmers)
- Uses ProductCard components to display each product consistently

THE ROLE-BASED BEHAVIOR:
- CUSTOMERS: See "No products available" message when empty, no "Are You a Farmer?" card
- FARMERS: See "Add Your First Product" when empty, see "Are You a Farmer?" card when products exist

THE LAYOUT:
- Header section with title and description
- Main grid of products (responsive: 1 column on mobile, up to 4 on desktop)
- Empty state with role-specific messaging
- Bottom CTA for farmers only (only shows when products exist and user is farmer)

THE CONDITIONAL LOGIC:
- If no products: Shows empty state with role-specific messaging
- If products exist: Shows grid + bottom CTA for farmers only
- This ensures the page always has useful content and clear next steps

THE GRID SYSTEM:
- Mobile: 1 column (stacked)
- Small screens: 2 columns
- Large screens: 3 columns  
- Extra large: 4 columns
- Gap of 8 (2rem) between items for breathing room

INTERACTIONS:
- Each product card has hover effects (scale up slightly)
- Cards link to individual product details
- "Add to Cart" buttons on each card
- Smooth transitions for all interactions

This page is the main shopping destination for customers and a showcase for farmers!
*/