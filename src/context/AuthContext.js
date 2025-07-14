import React, { createContext, useState, useEffect } from 'react';

// Create a context for authentication to be used throughout the app
export const AuthContext = createContext();

// AuthProvider component to wrap the application and provide authentication state and functions
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Stores the current authenticated user object
  const [loading, setLoading] = useState(true); // Indicates if authentication state is currently being loaded
  const [userId, setUserId] = useState(null); // Current user's unique ID

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const checkAuthState = () => {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setCurrentUser(user);
          setUserId(user.id);
        }
      } catch (error) {
        console.error("Error reading from localStorage:", error);
        // Clear corrupted data
        localStorage.removeItem('currentUser');
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle user login
  const login = async (email, password) => {
    try {
      // Get stored users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user with matching email and password
      const user = storedUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Create user object without password for security
        const userWithoutPassword = {
          id: user.id,
          email: user.email,
          name: user.name || email.split('@')[0], // Use email prefix as name if not provided
          role: user.role || 'customer' // Default to customer if role not set
        };
        
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        
        setCurrentUser(userWithoutPassword);
        setUserId(user.id);
        return { success: true };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  // Function to handle user registration
  const register = async (email, password, role) => {
    try {
      // Get stored users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      const existingUser = storedUsers.find(u => u.email === email);
      if (existingUser) {
        return { success: false, error: 'User with this email already exists' };
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(), // Simple ID generation
        email,
        password,
        name: email.split('@')[0], // Use email prefix as name
        role: role || 'customer' // Default to customer if role not provided
      };
      
      // Add to stored users
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      
      // Create user object without password for security
      const userWithoutPassword = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      };
      
      // Store current user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      
      setCurrentUser(userWithoutPassword);
      setUserId(newUser.id);
      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      setUserId(null);
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // The value object that will be provided to consumers of this context
  const value = {
    currentUser, // The current authenticated user
    userId,      // The UID of the current user
    loading,     // Boolean indicating if auth state is still loading
    login,       // Function to log in the user
    register,    // Function to register a new user
    logout       // Function to log out the user
  };

  return (
    <AuthContext.Provider value={value}>
      {/* AuthProvider should always render its children.
          The loading state is now handled by the App component or ProtectedRoute. */}
      {children}
    </AuthContext.Provider>
  );
}