import React from "react";
import { analytics } from "../data/data"; // data.js'den veriyi al
import Table from "../components/Table"; // Kendi Table bileşenimizi içe aktar

const Analytics = () => {
  const headers = ["Month", "Revenue ($)", "Sales", "New Customers"];
  
  return (
    <div className='p-6'>
      <h2 className='text-4xl font-bold text-gray-800'>Monthly Revenue</h2>
      <Table className='mt-4' headers={headers} data={analytics} />
    </div>
  );
};

export default Analytics;