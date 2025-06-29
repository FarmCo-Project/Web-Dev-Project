import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

/*
=== APP.JS - THE MAIN CONTAINER ===

This is the heart of our Farmers Marketplace app! Think of it as the "conductor" of an orchestra.

WHAT IT DOES:
- Sets up the entire app structure with a header (Navbar), main content area, and footer
- Wraps everything in our context providers so all components can access cart and product data
- Defines all the routes (URLs) that users can visit
- Uses React Router to handle navigation between pages

THE LAYOUT:
- Flexbox layout with min-h-screen to make sure the footer stays at the bottom
- Navbar at the top (always visible)
- Main content area that grows to fill available space
- Footer at the bottom

CONTEXT PROVIDERS:
- ProductProvider: Gives all components access to product data (add, remove, list products)
- CartProvider: Gives all components access to cart functionality (add to cart, remove, etc.)

ROUTES:
- "/" → Home page (landing page with CTAs)
- "/products" → Product listing page
- "/products/:id" → Individual product details (the :id is dynamic)
- "/cart" → Shopping cart page
- "/add-product" → Form for farmers to add new products
- "/about" → About page with company info

This file is pretty simple but super important - it's where everything comes together!
*/
