import React from "react";

const TopSellingProducts = ({ products }) => {
  const topSellingProducts = products
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3);

  return (
    <ul className='bg-white shadow-md rounded-lg p-4'>
      {topSellingProducts.map((product) => (
        <li key={product.id} className='flex justify-between py-2 border-b'>
          <span>{product.name}</span>
          <span>{product.sales} satış</span>
        </li>
      ))}
    </ul>
  );
};

export default TopSellingProducts;
