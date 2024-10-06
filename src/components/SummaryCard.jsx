import React from 'react';

const SummaryCard = ({ title, value }) => {
  return (
    <div className="card flex flex-col items-center justify-center p-4">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default SummaryCard;