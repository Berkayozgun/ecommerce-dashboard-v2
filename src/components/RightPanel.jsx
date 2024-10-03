import React from 'react';

const RightPanel = ({ topCountries, topCustomers, recentOrders }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h2 className="text-xl font-semibold">Top Selling Countries</h2>
      <ul className="mt-2">
        {topCountries.map(country => (
          <li key={country.name} className="flex justify-between py-1">
            <span>{country.name}</span>
            <span>{country.sales} sales</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Top Customers</h2>
      <ul className="mt-2">
        {topCustomers.map(customer => (
          <li key={customer.name} className="flex justify-between py-1">
            <span>{customer.name}</span>
            <span>{customer.spent} $</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Recent Orders</h2>
      <ul className="mt-2">
        {recentOrders.map(order => (
          <li key={order.id} className="flex justify-between py-1">
            <span>{order.productName}</span>
            <span>{order.price} $</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightPanel;