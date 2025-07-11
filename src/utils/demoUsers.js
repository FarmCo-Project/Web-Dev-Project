// Demo users utility for testing localStorage authentication
// This file helps set up test users in localStorage

export const setupDemoUsers = () => {
  const demoUsers = [
    {
      id: '1',
      email: 'demo@example.com',
      password: 'password123',
      name: 'Demo User'
    },
    {
      id: '2', 
      email: 'farmer@example.com',
      password: 'farmer123',
      name: 'Farmer John'
    },
    {
      id: '3',
      email: 'customer@example.com', 
      password: 'customer123',
      name: 'Customer Jane'
    }
  ];

  // Store demo users in localStorage
  localStorage.setItem('users', JSON.stringify(demoUsers));
  
  console.log('Demo users set up successfully!');
  console.log('Available demo accounts:');
  demoUsers.forEach(user => {
    console.log(`Email: ${user.email}, Password: ${user.password}`);
  });
  
  return demoUsers;
};

export const clearDemoUsers = () => {
  localStorage.removeItem('users');
  localStorage.removeItem('currentUser');
  console.log('Demo users cleared from localStorage');
};

export const getDemoUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Function to check if demo users exist
export const hasDemoUsers = () => {
  const users = getDemoUsers();
  return users.length > 0;
};

// Auto-setup demo users if none exist (for development)
if (typeof window !== 'undefined' && !hasDemoUsers()) {
  // Only set up demo users in development
  if (process.env.NODE_ENV === 'development') {
    setupDemoUsers();
  }
} 