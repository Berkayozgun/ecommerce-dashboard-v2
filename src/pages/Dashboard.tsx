import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { customers, orders, products } from "../data/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Users,
  DollarSign,
  Briefcase
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

Chart.register(...registerables);

const Dashboard = () => {
  const totalCustomers = customers.length;
  const totalRevenue = orders.reduce((acc, order) => acc + (order.totalPrice || 0), 0);
  const totalDeals = orders.length;

  const orderCounts = orders.reduce((acc: Record<string, number>, order) => {
    const date = new Date(order.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + (order.totalPrice || 0);
    return acc;
  }, {});

  const labels = Object.keys(orderCounts);
  const revenueData = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        data: Object.values(orderCounts),
        backgroundColor: "hsl(var(--primary))",
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const stats = [
    {
      title: "Total Customers",
      value: totalCustomers.toLocaleString(),
      icon: Users,
      description: "+12% from last month",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      description: "+25% from last month",
    },
    {
      title: "Total Deals",
      value: totalDeals.toLocaleString(),
      icon: Briefcase,
      description: "+18% from last month",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome back, Zac! Here's what's happening with your hub today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>
              Showing total revenue trends for the current period.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[350px]">
              <Bar
                data={revenueData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: { color: "rgba(0,0,0,0.05)" }
                    },
                    x: {
                      grid: { display: false }
                    }
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              A quick look at your top performing products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {products.slice(0, 5).map(product => (
                <div key={product.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`https://avatar.vercel.sh/${product.name}.png`} />
                    <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.category}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+${product.price}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
