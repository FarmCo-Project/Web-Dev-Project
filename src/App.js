import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext.js';
import { ProductProvider } from './context/ProductContext.js';
import { CartProvider } from './context/CartContext.js';

// Import demo users utility for testing
import './utils/demoUsers.js';

// Import Pages
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import ProductDetails from './pages/ProductDetails.js';
import AddProduct from './pages/AddProduct.js';
import Cart from './pages/Cart.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

// Import Components
import Navbar from './components/Navbar.js';

// ProtectedRoute component to guard routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext); // Get currentUser and loading state from AuthContext

  // If authentication state is still loading, show loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // If there's no current user (not authenticated), redirect to the login page
  if (!currentUser) {
    return <Navigate to="/login" replace />; // 'replace' prop prevents adding to history stack
  }

  // If user is authenticated, render the children components (the protected page)
  return children;
};

// Main App component
function App() {
  return (
    // AuthProvider wraps the entire application to provide authentication context to all components
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          {/* Navbar is rendered only if a user is authenticated */}
          <AuthContext.Consumer>
            {({ currentUser }) => currentUser && <Navbar />}
          </AuthContext.Consumer>
          <Routes>
            {/* Public routes: accessible to all users (e.g., Login, Register) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes: only accessible to authenticated users, wrapped by ProtectedRoute */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
            <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

            {/* Fallback route: Redirects any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
