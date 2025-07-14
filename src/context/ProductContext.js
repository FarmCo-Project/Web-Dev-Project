import { createContext, useState, useEffect } from 'react';
import defaultProducts from '../data/products.js';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // When the app starts up, let's load any saved products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('FarmCo App-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // If this is the first time someone visits, let's show them some sample products
      setProducts(defaultProducts);
      localStorage.setItem('FarmCo App-products', JSON.stringify(defaultProducts));
    }
  }, []);

  // Every time the products change, let's save them to localStorage so they don't disappear
  useEffect(() => {
    localStorage.setItem('FarmCo App-products', JSON.stringify(products));
  }, [products]);

  // This is what farmers use when they add a new product to the marketplace
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: Date.now() // Just using the current time as a quick-and-dirty ID
    };
    setProducts([...products, productWithId]);
  };

  // This could be useful later if we want to let farmers remove their products
  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

/*
=== PRODUCT CONTEXT - THE PRODUCT MANAGER ===

This is like the "inventory manager" of our marketplace! It keeps track of all the products
and makes sure they're available everywhere in the app.

WHAT IT DOES:
- Stores all product data in one central place (no more prop drilling!)
- Handles adding new products when farmers submit the form
- Removes products when needed
- Automatically saves everything to localStorage so data persists between page refreshes
- Loads default products on first visit (so users see something right away)

THE MAGIC:
- Uses React Context to share product data across all components
- localStorage integration means data survives browser refreshes
- Simple ID generation using timestamps (Date.now())
- Two useEffect hooks: one for loading, one for saving

KEY FUNCTIONS:
- addProduct(): Farmers use this when they submit the "Add Product" form
- removeProduct(): Could be used for admin features later
- products: The array that holds all product data

DATA FLOW:
1. User visits site → loads from localStorage OR sets default products
2. Farmer adds product → addProduct() called → updates state → saves to localStorage
3. All components can access products through useContext(ProductContext)

This context is used by:
- Products.js (to display all products)
- ProductDetails.js (to find specific product by ID)
- AddProduct.js (to add new products)
- ProductCard.js (to display individual products)

Think of it as the "single source of truth" for all product data!
*/ 