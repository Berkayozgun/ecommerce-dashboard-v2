import React from 'react';
import { products } from '../data/data';

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">{product.price} $</td>
              <td className="py-2 px-4 border">{product.description}</td>
              <td className="py-2 px-4 border">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
