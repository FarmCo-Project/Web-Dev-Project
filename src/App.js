import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext.js';
import { ProductProvider } from './context/ProductContext.js';
import { CartProvider } from './context/CartContext.js';

// Hey there! This is our main App file where we set up all the routes and wrap everything in our context providers.
// Just pulling in our demo users for testing purposes. You can ignore this if you're not testing users!
import './utils/demoUsers.js';

// Here come all our page imports. Each one is a different screen in the app.
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import ProductDetails from './pages/ProductDetails.js';
import AddProduct from './pages/AddProduct.js';
import Cart from './pages/Cart.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Footer from "./components/Footer.js";

// And here are our main components, like the Navbar and Footer.
import Navbar from './components/Navbar.js';

// This little guy makes sure only logged-in users can see certain pages. If you're not logged in, it sends you to the login page.
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext); // Grabbing the current user and loading state from our AuthContext

  // If we're still figuring out if the user is logged in, let's show a spinner so folks know something's happening.
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

  // If there's no user, let's send them to the login page. No sneaking around!
  if (!currentUser) {
    return <Navigate to="/login" replace />; // 'replace' just means "don't add this to the browser history"
  }

  // If we made it here, the user is good to go!
  return children;
};

// This one is just like ProtectedRoute, but only lets in farmers. If you're not a farmer, you get sent home.
const FarmerOnlyRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  // Still checking? Spinner time!
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

  // Not logged in? Off to login you go!
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Not a farmer? Sorry, this page isn't for you.
  if (currentUser.role !== 'farmer') {
    return <Navigate to="/" replace />;
  }

  // All clear, farmer friend!
  return children;
};

// And this one is for customers only. Same idea as above!
const CustomerOnlyRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  // Still loading? Spinner again!
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

  // Not logged in? Go log in!
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Not a customer? This page is just for shoppers.
  if (currentUser.role !== 'customer') {
    return <Navigate to="/" replace />;
  }

  // Welcome, customer!
  return children;
};

// Here's the main App component where we put it all together.
function App() {
  return (
    // We wrap everything in AuthProvider so every component can know who's logged in.
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          {/* The Navbar only shows up if someone is logged in. No need for it on the login/register pages! */}
          <AuthContext.Consumer>
            {({ currentUser }) => currentUser && <Navbar />}
          </AuthContext.Consumer>
          <main className="flex-1">
          <Routes>
            {/* These routes are open to everyone (well, except you have to be logged out to see them!) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* These are the main pages, but you have to be logged in to see them. */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/products/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

            {/* Only farmers can get to this page! */}
            <Route path="/add-product" element={<FarmerOnlyRoute><AddProduct /></FarmerOnlyRoute>} />

            {/* Only customers can see their cart. Farmers don't shop here! */}
            <Route path="/cart" element={<CustomerOnlyRoute><Cart /></CustomerOnlyRoute>} />

            {/* If someone types a weird URL, just send them home. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </main>
        <Footer />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
