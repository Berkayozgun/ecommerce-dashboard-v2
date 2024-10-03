import React from 'react';
import { transactions } from '../data/data';

const Transactions = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Payment Type</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Product</th>
            <th className="py-2 px-4 border">Buyer</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{transaction.date}</td>
              <td className="py-2 px-4 border">{transaction.amount} $</td>
              <td className="py-2 px-4 border">{transaction.type}</td>
              <td className="py-2 px-4 border">{transaction.status}</td>
              <td className="py-2 px-4 border">{transaction.product}</td>
              <td className="py-2 px-4 border">{transaction.buyer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;