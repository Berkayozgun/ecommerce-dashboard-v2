import React from "react";

const TopSellingProducts = ({ products }) => {
  const topSellingProducts = products
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3);

  return (
    <div className='card p-4'>
      <h3 className='text-lg font-semibold text-gray-800'>
        Top Selling Products
      </h3>
      <ul className='mt-2'>
        {topSellingProducts.map((product) => (
          <li key={product.id} className='flex justify-between py-2 border-b'>
            <span>{product.name}</span>
            <span className='text-blue-600'>{product.sales} sales</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellingProducts;
