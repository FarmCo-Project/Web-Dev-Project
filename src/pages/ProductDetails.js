import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { ProductContext } from '../context/ProductContext.js';

export default function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  // If someone tries to visit a product that doesn't exist, let's show them a friendly error page
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-16 max-w-md mx-auto">
            <div className="text-6xl mb-6">❌</div>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8 text-lg">The product you're looking for doesn't exist.</p>
            <a href="/products" className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold">
              Browse All Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Let's give folks an easy way to get back to browsing */}
          <div className="mb-8">
            <a href="/products" className="text-green-600 hover:text-green-700 transition-colors duration-300">
              ← Back to Products
            </a>
          </div>

          {/* Here's the main product showcase - big image on the left, details on the right */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg" 
                />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  {product.name}
                </h1>
                
                <div className="mb-8">
                  <p className="text-2xl font-bold text-green-600">
                    KES {product.price.toLocaleString()}
                  </p>
                  {product.quantity !== undefined && (
                    <p className="text-lg text-gray-600 mt-2">
                      {product.quantity > 0 ? `${product.quantity} units in stock` : 'Currently out of stock'}
                    </p>
                  )}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Description</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* The big "Add to Cart" button - this is where the magic happens! */}
                <button 
                  onClick={() => addToCart(product)} 
                  disabled={product.quantity !== undefined && product.quantity <= 0}
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {product.quantity !== undefined && product.quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
=== PRODUCT DETAILS.JS - THE PRODUCT SHOWCASE ===

This is the "product page" where customers get the full scoop on a specific item!
It's like the detailed view you'd see on Amazon or any e-commerce site.

WHAT IT DOES:
- Shows detailed information about one specific product
- Displays large product image for better viewing
- Shows price, description, and other details
- Provides "Add to Cart" functionality
- Handles cases where a product doesn't exist (404-style)
- Includes navigation back to the products list

THE ROUTING MAGIC:
- Uses useParams() to get the product ID from the URL
- Finds the specific product from the products array
- If product doesn't exist, shows a friendly error page
- The URL looks like: /products/123 (where 123 is the product ID)

THE LAYOUT:
- Breadcrumb navigation ("← Back to Products")
- Two-column layout on desktop: image on left, details on right
- Single column on mobile (stacked)
- Large, prominent "Add to Cart" button
- Clean, spacious design with good typography

ERROR HANDLING:
- If someone visits /products/999999 (non-existent product)
- Shows a friendly error message with a way back to products
- Centered layout with helpful messaging
- Provides clear next steps (browse all products)

THE USER EXPERIENCE:
- Large product image for better viewing
- Clear pricing with proper formatting (KES 1,500)
- Detailed description section
- Prominent call-to-action button
- Easy navigation back to product list

This page is crucial for conversion - it's where customers decide to buy!
*/
