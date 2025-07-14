const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    description: "Organic, locally grown tomatoes. Perfect for salads and cooking.",
    price: 150,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
    quantity: 25
  },
  {
    id: 2,
    name: "Sweet Corn",
    description: "Fresh sweet corn harvested from local farms. Great for grilling or boiling.",
    price: 200,
    image: "https://images.unsplash.com/photo-1601593768797-9e5c2b0c0c0c?w=400&h=300&fit=crop",
    quantity: 15
  },
  {
    id: 3,
    name: "Carrots",
    description: "Organic carrots rich in vitamins and minerals. Perfect for juicing or cooking.",
    price: 120,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    quantity: 30
  },
  {
    id: 4,
    name: "Green Beans",
    description: "Fresh green beans from local farmers. Tender and flavorful.",
    price: 180,
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&h=300&fit=crop",
    quantity: 20
  },
  {
    id: 5,
    name: "Potatoes",
    description: "Fresh potatoes perfect for roasting, mashing, or frying.",
    price: 250,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
    quantity: 40
  },
  {
    id: 6,
    name: "Onions",
    description: "Fresh onions with excellent flavor. Essential for cooking.",
    price: 100,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
    quantity: 35
  }
];

export default products;

/*
=== PRODUCTS.JS - THE DEFAULT PRODUCT DATA ===

This is the "seed data" that gives users something to see when they first visit!
It's like the sample products you'd see in a demo or when a store first opens.

WHAT IT DOES:
- Provides default products for first-time visitors
- Gives users something to browse and interact with
- Shows the marketplace in action before farmers add their own products
- Demonstrates the product structure and data format
- Ensures the app doesn't look empty on first load

THE PRODUCT STRUCTURE:
Each product has:
- id: Unique identifier (used for routing and cart management)
- name: Product name (what customers see)
- description: Detailed product information
- price: Cost in Kenyan Shillings (KES)
- image: URL to product photo (from Unsplash for demo)

THE PRODUCT SELECTION:
- Fresh Tomatoes: Common, versatile vegetable
- Sweet Corn: Popular seasonal item
- Carrots: Healthy, widely used vegetable
- Green Beans: Fresh, local produce
- Potatoes: Staple food item
- Onions: Essential cooking ingredient

THE PRICING STRATEGY:
- Realistic prices in Kenyan Shillings
- Range from 100-250 KES
- Reflects local market conditions
- Shows price formatting for the app

THE IMAGES:
- All from Unsplash (free stock photos)
- High-quality, professional looking
- Consistent sizing (400x300 with crop)
- Relevant to each product

THE DATA FLOW:
1. First visit → ProductContext loads this data
2. Saves to localStorage for persistence
3. Subsequent visits load from localStorage
4. Farmers can add their own products
5. This data serves as examples and fallback

WHY THIS MATTERS:
- Users see a functional marketplace immediately
- Demonstrates the app's capabilities
- Provides examples for farmers to follow
- Ensures good user experience from day one
- Shows the expected data format

This file is crucial for the initial user experience - it makes the marketplace feel alive and functional!
*/ 