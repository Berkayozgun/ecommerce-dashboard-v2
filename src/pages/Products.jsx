import React, { useState } from 'react';
import { products as initialProducts } from '../data/data';
import Card from "../components/Card"; // Kendi Card bileşenimizi içe aktar
import Button from "../components/Button"; // Kendi Button bileşenimizi içe aktar
import Input from "../components/Input"; // Kendi Input bileşenimizi içe aktar

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.description && newProduct.category) {
      const updatedProducts = [
        ...products,
        { id: products.length + 1, ...newProduct }
      ];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', description: '', category: '' });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-800">Products</h1>
      <form onSubmit={handleAddProduct} className="mt-4">
        <Input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
        <Input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <Input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
        <Input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} />
        <Button type="submit" className="mt-2">Add Product</Button>
      </form>
      <div className="mt-4">
        <h2 className="text-3xl font-semibold text-gray-700">Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {products.map(product => (
            <Card key={product.id} className="shadow-md">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg font-bold">${product.price}</p>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-gray-600">Category: {product.category}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;