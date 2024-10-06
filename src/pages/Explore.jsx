import React, { useState } from "react";
import { products } from "../data/data"; // data.js'den ürün verilerini al
import Card from "../components/Card"; // Kendi Card bileşenimizi içe aktar
import Button from "../components/Button"; // Kendi Button bileşenimizi içe aktar
import OrderDetailModal from "../components/OrderDetailModal"; // Kendi OrderDetailModal bileşenimizi içe aktar

const Explore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className='p-4'>
      <h2 className='text-3xl font-semibold mt-6 text-gray-800'>Featured Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {products.map((product) => (
          <Card key={product.id} className='shadow-md hover:shadow-lg transition-shadow duration-300'>
            <img
              src={`https://via.placeholder.com/300?text=${product.name}`}
              alt={product.name}
              className='w-full h-48 object-cover rounded-md'
            />
            <h3 className='text-xl font-semibold mt-2'>{product.name}</h3>
            <p className='text-gray-600'>Category: {product.category}</p>
            <p className='text-lg font-bold mt-1'>${product.price}</p>
            <p className='text-gray-500'>Sales: {product.sales}</p>
            <Button className='mt-2' onClick={() => handleOpenModal(product)}>View Details</Button>
          </Card>
        ))}
      </div>
      {isModalOpen && (
        <OrderDetailModal order={selectedOrder} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Explore;
