import React from 'react';

const OrderDetailModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <p><strong>Customer Name:</strong> {order.customerName}</p>
        <p><strong>Total Price:</strong> {order.totalPrice} $</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <button 
          className="mt-4 bg-blue-500 text-white p-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetailModal;
