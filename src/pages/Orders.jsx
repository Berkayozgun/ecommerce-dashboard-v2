import React, { useState } from 'react';
import { orders, customers } from '../data/data';
import OrderDetailModal from '../components/OrderDetailModal';
import { CSVLink } from 'react-csv';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order => {
    const customer = customers.find(c => c.id === order.customerId);
    return customer && customer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex p-4">
      <h1 className="text-3xl font-bold">Orders</h1>
      <CSVLink data={filteredOrders} filename={"orders.csv"} className="bg-blue-500 text-white p-2 rounded">
        Download CSV
      </CSVLink>
      <input
        type="text"
        placeholder="Search by customer name..."
        className="border p-2 mt-4"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Customer</th>
            <th className="py-2 px-4 border">Total Price</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => {
            const customer = customers.find(c => c.id === order.customerId);
            return (
              <tr key={order.id} className="hover:bg-gray-100" onClick={() => setSelectedOrder({ ...order, customerName: customer ? customer.name : 'Unknown' })}>
                <td className="py-2 px-4 border">{customer ? customer.name : 'Unknown'}</td>
                <td className="py-2 px-4 border">{order.totalPrice} $</td>
                <td className="py-2 px-4 border">{order.status}</td>
                <td className="py-2 px-4 border">{order.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedOrder && <OrderDetailModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  );
};

export default Orders;