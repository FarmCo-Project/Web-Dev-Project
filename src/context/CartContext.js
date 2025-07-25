import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // When the app starts up, let's load any saved cart items from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('farmers-marketplace-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Every time the cart changes, let's save it to localStorage so items don't disappear
  useEffect(() => {
    localStorage.setItem('farmers-marketplace-cart', JSON.stringify(cart));
  }, [cart]);

  // This is what happens when someone clicks "Add to Cart" - it's pretty smart!
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If the item is already in the cart, just increase the quantity
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If it's a new item, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // This removes an item completely from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // This handles the +/- buttons in the cart - if quantity goes to 0, it removes the item
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

  // This empties the entire cart (the "Clear Cart" button)
  const clearCart = () => {
    setCart([]);
  };

  // This calculates the total price for checkout
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // This counts all the items for the cart badge in the navbar
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
