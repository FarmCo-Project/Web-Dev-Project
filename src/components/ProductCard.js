import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
          {product.name}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-bold text-green-600">
            KES {product.price.toLocaleString()}
          </p>
          <div className="text-sm text-gray-500">
            <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Fresh
            </span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link 
            to={`/products/${product.id}`} 
            className="flex-1 text-center bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/*
=== PRODUCT CARD.JS - THE PRODUCT DISPLAY COMPONENT ===

This is the "product card" that shows individual products in the grid!
It's like the product tiles you see on Amazon, eBay, or any e-commerce site.

WHAT IT DOES:
- Displays a single product in a beautiful card format
- Shows product image, name, description, and price
- Provides "View Details" and "Add to Cart" buttons
- Handles hover effects and interactions
- Uses consistent styling across the marketplace

THE CARD STRUCTURE:
- Image section at the top (with hover zoom effect)
- Product information in the middle
- Action buttons at the bottom
- Rounded corners and shadows for modern look

THE IMAGE SECTION:
- Large product image (h-56 = 224px height)
- Hover effect: image scales up slightly (scale-110)
- Subtle overlay effect on hover
- Proper aspect ratio with object-cover

THE PRODUCT INFO:
- Product name (with hover color change)
- Description (truncated to 2 lines with line-clamp-2)
- Price (formatted with commas: KES 1,500)
- "Fresh" badge to indicate quality

THE ACTION BUTTONS:
- "View Details" → links to individual product page
- "Add to Cart" → adds product to shopping cart
- Both buttons have hover effects and shadows
- Equal width (flex-1) for balanced layout

THE HOVER EFFECTS:
- Card shadow increases on hover
- Image scales up slightly
- Product name changes color
- Subtle overlay on image
- Button shadows change

THE RESPONSIVE DESIGN:
- Works well in different grid layouts
- Maintains aspect ratio on all screen sizes
- Text truncation prevents layout breaking
- Consistent spacing and typography

USAGE:
- Used in Products.js to display all products in a grid
- Each card represents one product from the products array
- Receives product data as props
- Integrates with CartContext for add-to-cart functionality

This component is crucial for the shopping experience - it's how customers see and interact with products!
*/
