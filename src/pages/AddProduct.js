import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.description || !formData.price || !formData.image) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Add product
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price)
    };

    addProduct(newProduct);
    
    // Show success message
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      price: '',
      image: ''
    });

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/products');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Add New Product</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              List your fresh produce and reach customers directly through our platform. 
              Help your community access quality, locally-grown food.
            </p>
          </div>
          
          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8">
              <div className="flex items-center">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="font-semibold text-lg">Product added successfully!</p>
                  <p>Redirecting to products page...</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="e.g., Fresh Organic Tomatoes"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-3">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg resize-none"
                  placeholder="Describe your product in detail. What makes it special? How fresh is it? What are its benefits?"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-lg font-semibold text-gray-700 mb-3">
                  Price (KES) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="150"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">Set a fair price that reflects the quality of your product</p>
              </div>

              <div>
                <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-3">
                  Product Image URL *
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="https://example.com/your-product-image.jpg"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Provide a direct link to a high-quality image (e.g., from Unsplash, Imgur, or your own hosting)
                </p>
              </div>

              {/* Image Preview */}
              {formData.image && (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Image Preview</h3>
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <p className="text-red-500 mt-2" style={{display: 'none'}}>
                    Unable to load image. Please check the URL.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-green-600 text-white py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? 'Adding Product...' : 'Add Product'}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="flex-1 bg-gray-300 text-gray-700 py-4 px-8 rounded-xl hover:bg-gray-400 transition-all duration-300 text-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Tips for Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">📸 High-Quality Images</h4>
                <p className="text-blue-600">Use clear, well-lit photos that showcase your product's quality</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">💰 Fair Pricing</h4>
                <p className="text-blue-600">Set competitive prices that reflect your product's value</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">📝 Detailed Descriptions</h4>
                <p className="text-blue-600">Highlight what makes your product special and fresh</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">🌱 Local Focus</h4>
                <p className="text-blue-600">Emphasize the local, fresh nature of your produce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
=== ADD PRODUCT.JS - THE FARMER'S PRODUCT FORM ===

This is the "product creation" page where farmers can list their fresh produce!
It's like the "sell your item" form on eBay or Amazon - where sellers add new products.

WHAT IT DOES:
- Provides a form for farmers to add new products to the marketplace
- Validates that all required fields are filled out
- Shows a live preview of the product image
- Displays success message and redirects after submission
- Includes helpful tips for creating successful listings
- Handles form state and submission logic

THE FORM FIELDS:
- Product Name: What the product is called
- Description: Detailed info about the product
- Price: Cost in Kenyan Shillings (KES)
- Image URL: Link to a product photo

THE FORM LOGIC:
- Controlled components (React manages the form state)
- Real-time validation (checks if fields are empty)
- Image preview (shows the image as you type the URL)
- Form reset after successful submission
- Loading states during submission

THE USER EXPERIENCE:
- Clear labels and placeholders for guidance
- Large, easy-to-use form fields
- Visual feedback (focus states, hover effects)
- Success message with automatic redirect
- Cancel button to go back to products
- Helpful tips section for best practices

THE SUBMISSION FLOW:
1. Farmer fills out form
2. Clicks "Add Product"
3. Form validates all fields
4. Product gets added to the marketplace
5. Success message appears
6. Form resets
7. Redirects to products page after 2 seconds

THE IMAGE PREVIEW:
- Shows the image as you type the URL
- Handles errors gracefully (shows error message if image fails to load)
- Helps farmers verify they have the right image

THE TIPS SECTION:
- Provides guidance for creating successful listings
- Covers image quality, pricing, descriptions, and local focus
- Helps farmers understand what customers want

This page is crucial for growing the marketplace - it's how we get more products listed!
*/ 