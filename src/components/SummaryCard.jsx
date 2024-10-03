import React from 'react';

const SummaryCard = ({ title, value }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-2xl">{value}</p>
  </div>
);

export default SummaryCard;
