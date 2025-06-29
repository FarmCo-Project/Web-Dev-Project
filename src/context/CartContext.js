import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('farmers-marketplace-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('farmers-marketplace-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      getCartTotal, 
      getCartItemCount 
    }}>
      {children}
    </CartContext.Provider>
  );
}

/*
=== CART CONTEXT - THE SHOPPING CART MANAGER ===

This is the "shopping cart" of our marketplace! It handles all the cart-related logic
and makes sure customers can add, remove, and manage their items.

WHAT IT DOES:
- Manages the shopping cart state (what items are in the cart)
- Handles adding products to cart (with smart quantity management)
- Removes items from cart
- Updates quantities (the +/- buttons in cart)
- Calculates totals and item counts
- Persists cart data in localStorage (so cart survives page refreshes)

THE SMART FEATURES:
- If you add the same product twice, it increases quantity instead of creating duplicates
- Automatically removes items when quantity reaches 0
- Calculates total price and item count for the navbar badge
- localStorage integration means your cart doesn't disappear when you refresh

KEY FUNCTIONS:
- addToCart(): Called when user clicks "Add to Cart" - handles duplicates smartly
- removeFromCart(): Removes a specific item completely
- updateQuantity(): Handles the +/- buttons in cart (removes if quantity ≤ 0)
- clearCart(): Empties the entire cart (the "Clear Cart" button)
- getCartTotal(): Calculates total price for checkout
- getCartItemCount(): Counts total items for the navbar badge

THE QUANTITY LOGIC:
- First time adding a product → quantity = 1
- Adding same product again → quantity increases by 1
- Using +/- buttons → quantity changes, removes if ≤ 0
- Cart badge shows total quantity across all items

This context is used by:
- Navbar.js (to show cart count badge)
- ProductCard.js (Add to Cart button)
- ProductDetails.js (Add to Cart button)
- Cart.js (entire cart page functionality)

Think of it as the "shopping assistant" that remembers what you want to buy!
*/
