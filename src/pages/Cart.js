import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);

  // If the cart is empty, let's show a friendly message and encourage them to shop
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-16 max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 text-lg">Add some fresh products to get started!</p>
            <a 
              href="/products" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Let's show them what's in their cart and give them a way to clear it if they want */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Shopping Cart</h1>
              <p className="text-gray-600 text-lg">You have {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
            </div>
            <button 
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold"
            >
              Clear Cart
            </button>
          </div>
          
          {/* Here's where we show each item in their cart with controls to adjust quantities */}
          <div className="space-y-6 mb-12">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-lg">KES {item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Let's give them easy + and - buttons to adjust quantities */}
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all duration-300 font-bold text-lg"
                      >
                        -
                      </button>
                      <span className="w-16 text-center font-bold text-xl">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all duration-300 font-bold text-lg"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">KES {(item.price * item.quantity).toLocaleString()}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-semibold transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Here's the order summary with the total and checkout button */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span className="font-semibold">KES {getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-green-600">KES {getCartTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {/* The big checkout button - this is where they complete their purchase! */}
            <button className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Proceed to Checkout
            </button>
            
            <div className="text-center mt-6">
              <a 
                href="/products" 
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
=== CART.JS - THE SHOPPING CART PAGE ===

This is the "checkout area" where customers review what they want to buy!
It's like the cart page on any e-commerce site - where you see your items and prepare to pay.

WHAT IT DOES:
- Shows all items currently in the shopping cart
- Displays quantity controls (+ and - buttons) for each item
- Calculates and shows the total price
- Allows removing individual items
- Provides a "Clear Cart" option to remove everything
- Shows a friendly empty state when cart is empty
- Includes a checkout button (currently just visual)

THE EMPTY STATE:
- When cart is empty, shows a centered message
- Encourages users to browse products
- Uses a shopping cart emoji for visual appeal
- Provides a clear call-to-action

THE CART ITEMS:
- Each item shows: image, name, price, quantity controls, total price
- Quantity controls with + and - buttons
- Remove button for each individual item
- Hover effects for better interactivity
- Proper spacing and visual hierarchy

THE ORDER SUMMARY:
- Shows subtotal (price × quantity for all items)
- Displays delivery fee (currently free)
- Calculates and shows total
- Large, prominent checkout button
- "Continue Shopping" link

THE QUANTITY LOGIC:
- + button increases quantity
- - button decreases quantity
- If quantity reaches 0, item is automatically removed
- Total price updates in real-time
- Item count in header updates automatically

INTERACTIONS:
- All buttons have hover effects
- Smooth transitions for quantity changes
- Clear visual feedback for all actions
- Responsive design works on all screen sizes

This page is crucial for the purchase flow - it's where customers finalize their decisions!
*/
