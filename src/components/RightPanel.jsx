import React from 'react';
import Card from './Card';

const RightPanel = ({ topCountries, topCustomers, recentOrders }) => {
  return (
    <div className="bg-background p-4 w-64 h-screen overflow-y-auto">
      <Card className="mb-4">
        <h2 className="text-lg font-semibold text-primary mb-2">Top Selling Countries</h2>
        <ul className="space-y-1">
          {topCountries.slice(0, 3).map(country => (
            <li key={country.name} className="flex justify-between items-center py-1 text-sm">
              <span className="text-text">{country.name}</span>
              <span className="text-secondary font-medium">{country.sales} sales</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mb-4">
        <h2 className="text-lg font-semibold text-primary mb-2">Top Customers</h2>
        <ul className="space-y-1">
          {topCustomers.slice(0, 3).map(customer => (
            <li key={customer.name} className="flex justify-between items-center py-1 text-sm">
              <span className="text-text">{customer.name}</span>
              <span className="text-accent font-medium">${customer.spent}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-primary mb-2">Recent Orders</h2>
        <ul className="space-y-1">
          {recentOrders.slice(0, 5).map(order => (
            <li key={order.id} className="flex justify-between items-center py-1 text-sm">
              <span className="text-text">{order.productName}</span>
              <span className="text-accent font-medium">${order.price}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RightPanel;