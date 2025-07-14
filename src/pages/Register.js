import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

// Register component for new user registration
const Register = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
  const [role, setRole] = useState('customer'); // State for user role selection
  const [error, setError] = useState(''); // State for displaying registration errors
  const [loading, setLoading] = useState(false); // State for loading indicator during submission
  const navigate = useNavigate(); // Hook to navigate programmatically after registration
  const { register } = useContext(AuthContext); // Get register function from AuthContext

  // Handle form submission for registration
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear any previous error messages
    setLoading(true); // Set loading state to true

    // Basic validation: Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please ensure both passwords are the same.');
      setLoading(false); // Stop loading
      return; // Exit function if passwords don't match
    }

    // Basic validation: Check password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      // Attempt to create a new user with the provided email, password, and role
      const result = await register(email, password, role);
      
      if (result.success) {
        navigate('/'); // On successful registration, navigate the user to the home page
      } else {
        setError(result.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      // Catch and handle any unexpected errors
      console.error("Registration error:", err);
      setError('Failed to register. An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false); // Always reset loading state after the attempt (success or failure)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Register</h2>
        {/* Error message display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative mb-6" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-gray-700 text-lg font-medium mb-2">I am a:</label>
            <select
              id="role"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              aria-label="User role selection"
            >
              <option value="customer">Customer (I want to buy products)</option>
              <option value="farmer">Farmer (I want to sell products)</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 text-lg font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-label="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={loading} // Disable button while loading
            aria-live="polite" // Announce changes to assistive technologies
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-8 text-md">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;