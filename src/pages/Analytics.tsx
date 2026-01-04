import * as React from "react"
import { analytics } from "../data/data";
import { Analytics as AnalyticsType } from "../types";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const columns: ColumnDef<AnalyticsType>[] = [
  {
    accessorKey: "month",
    header: "Month",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => {
      const revenue = parseFloat(row.getValue("revenue"))
      return <div className="font-medium">${revenue.toLocaleString()}</div>
    },
  },
  {
    accessorKey: "sales",
    header: "Sales",
  },
  {
    accessorKey: "newCustomers",
    header: "New Customers",
  },
]

export function Analytics() {
  const chartData = {
    labels: analytics.map(a => a.month),
    datasets: [
      {
        label: 'Revenue Growth',
        data: analytics.map(a => a.revenue),
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Sales Volume',
        data: analytics.map(a => a.sales),
        borderColor: 'hsl(var(--accent))',
        backgroundColor: 'transparent',
        tension: 0.4,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Performance Analytics</h2>
        <p className="text-muted-foreground">
          Deep dive into your monthly performance metrics and growth trends.
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Growth Trends</CardTitle>
          <CardDescription>
            Revenue and sales volume over the last few months.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <Line data={chartData} options={options} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
          <CardDescription>
            Tabular view of performance metrics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={analytics} searchKey="month" />
        </CardContent>
      </Card>
    </div>
  );
}

export default Analytics;