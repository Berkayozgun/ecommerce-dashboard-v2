import { useState } from 'react';
import { customers } from '../data/data';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Customers</h1>
      <input
        type="text"
        placeholder="Search by customer name..."
        className="border p-2 mt-4"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Address</th>
            <th className="py-2 px-4 border">Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{customer.name}</td>
              <td className="py-2 px-4 border">{customer.email}</td>
              <td className="py-2 px-4 border">{customer.address}</td>
              <td className="py-2 px-4 border">{customer.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;