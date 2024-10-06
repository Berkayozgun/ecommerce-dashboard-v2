import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { customers, orders, products } from "../data/data";
import SummaryCard from "../components/SummaryCard";
import TopSellingProducts from "../components/TopSellingProducts";

Chart.register(...registerables);

const Dashboard = () => {
  const totalCustomers = customers.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0);
  const totalDeals = orders.length;

  const orderCounts = orders.reduce((acc, order) => {
    const date = new Date(order.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + order.totalPrice;
    return acc;
  }, {});

  const labels = Object.keys(orderCounts);
  const revenueData = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        data: Object.values(orderCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex p-4 bg-gray-50 min-h-screen">
      <div className='flex-1 p-4 max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Welcome, Zac!</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <SummaryCard title='Total Customers' value={totalCustomers} />
          <SummaryCard title='Total Revenue' value={`${totalRevenue.toFixed(2)} $`} />
          <SummaryCard title='Total Deals' value={totalDeals} />
        </div>

        <h2 className='text-2xl font-bold mb-4'>Revenue Chart</h2>
        <div className='max-w-full overflow-x-auto'>
          <Bar data={revenueData} options={{ maintainAspectRatio: false }} />
        </div>

        <TopSellingProducts products={products} />
      </div>
    </div>
  );
};

export default Dashboard;
