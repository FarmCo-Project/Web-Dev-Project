# LocalStorage Authentication System

This app now uses a simple localStorage-based authentication system instead of Firebase. This means **no database is required** for authentication to work.

## How It Works

### Storage
- **User Data**: Stored in browser's localStorage under the key `'users'`
- **Current User**: Stored in localStorage under the key `'currentUser'`
- **Session Persistence**: User stays logged in until they logout or clear browser data

### Security Considerations
⚠️ **Important**: This is a demo/development authentication system. For production use, consider:
- Password hashing (currently passwords are stored in plain text)
- Server-side authentication
- HTTPS for data transmission
- Token-based authentication

## Demo Users

The system automatically creates demo users for testing:

1. **Demo User**
   - Email: `demo@example.com`
   - Password: `password123`

2. **Farmer John**
   - Email: `farmer@example.com`
   - Password: `farmer123`

3. **Customer Jane**
   - Email: `customer@example.com`
   - Password: `customer123`

## Features

### ✅ What Works
- User registration with email/password
- User login/logout
- Session persistence (stays logged in on page refresh)
- Protected routes (redirects to login if not authenticated)
- User data storage in localStorage
- Basic validation (password matching, email format)

### 🔧 What You Can Do
- Register new users
- Login with existing users
- Logout
- Access protected pages when authenticated
- See user email in navbar when logged in

## Usage

### For Development/Testing
1. Start the app: `npm start`
2. Demo users are automatically created
3. Use any of the demo accounts to login
4. Or register a new account

### For Production
1. Remove Firebase dependencies from `package.json`
2. Implement proper password hashing
3. Consider server-side authentication
4. Add proper error handling and validation

## File Structure

```
src/
├── context/
│   └── AuthContext.js          # Main authentication logic
├── pages/
│   ├── Login.js               # Login page
│   └── Register.js            # Registration page
├── utils/
│   └── demoUsers.js           # Demo user setup utility
└── App.js                     # Main app with protected routes
```

## API Reference

### AuthContext Methods

```javascript
const { login, register, logout, currentUser, loading } = useContext(AuthContext);

// Login
const result = await login(email, password);
if (result.success) {
  // User logged in successfully
} else {
  // Handle error: result.error
}

// Register
const result = await register(email, password);
if (result.success) {
  // User registered successfully
} else {
  // Handle error: result.error
}

// Logout
await logout();
```

## Troubleshooting

### Common Issues

1. **"Invalid email or password"**
   - Check if user exists in localStorage
   - Verify email/password combination
   - Use demo accounts for testing

2. **User not staying logged in**
   - Check if localStorage is enabled in browser
   - Clear browser data and try again

3. **Registration fails**
   - Ensure email is not already registered
   - Password must be at least 6 characters
   - Check browser console for errors

### Debug Commands

Open browser console and run:

```javascript
// View all users
console.log(JSON.parse(localStorage.getItem('users')));

// View current user
console.log(JSON.parse(localStorage.getItem('currentUser')));

// Clear all data
localStorage.clear();

// Setup demo users again
import('./utils/demoUsers.js').then(m => m.setupDemoUsers());
```

## Migration from Firebase

If you were previously using Firebase:

1. ✅ Authentication context updated
2. ✅ Login/Register pages updated  
3. ✅ App.js simplified
4. ✅ Navbar works with new system
5. 🔄 Consider removing Firebase from package.json (optional)

The app should work exactly the same from a user perspective, but now without requiring a database! 