import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext.js';

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    quantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  // This function updates our form data whenever the user types something
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // This function handles image file uploads and converts them to base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, etc.)');
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image file size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        setFormData(prev => ({
          ...prev,
          image: base64String
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // When the farmer submits the form, let's add their product to our marketplace!
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Let's make sure they filled out everything we need
    if (!formData.name || !formData.description || !formData.price || !formData.image || !formData.quantity) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Time to create the new product!
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity)
    };

    addProduct(newProduct);
    
    // Show them a success message so they know it worked
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Clear out the form so it's ready for the next product
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      quantity: ''
    });
    setImagePreview('');

    // Send them back to the products page after a couple seconds
    setTimeout(() => {
      navigate('/products');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Let's welcome farmers and explain what this page is for */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Add New Product</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              List your fresh produce and reach customers directly through our platform. 
              Help your community access quality, locally-grown food.
            </p>
          </div>
          
          {/* If the product was added successfully, let's show a happy message */}
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

          {/* Here's the main form where farmers enter their product details */}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="quantity" className="block text-lg font-semibold text-gray-700 mb-3">
                    Quantity in Stock *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    step="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    placeholder="50"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">How many units do you have available?</p>
                </div>
              </div>

              <div>
                <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-3">
                  Product Image *
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload a high-quality image of your product (JPEG, PNG, max 5MB)
                </p>
              </div>

              {/* Let's show them a preview of their image so they can make sure it looks good */}
              {imagePreview && (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Image Preview</h3>
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-md"
                  />
                </div>
              )}

              {/* The action buttons - submit to add the product, or cancel to go back */}
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

          {/* Let's give farmers some helpful tips to make their products more appealing */}
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
                <h4 className="font-semibold text-blue-700 mb-2">📦 Accurate Stock Levels</h4>
                <p className="text-blue-600">Keep your quantity updated so customers know what's available</p>
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