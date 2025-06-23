import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Product Details</h2>
      <p className="text-gray-600">Details for product ID: <span className="font-mono">{id}</span></p>
    </div>
  );
};

export default ProductDetails; 