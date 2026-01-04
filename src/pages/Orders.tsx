import * as React from "react"
import { Badge } from "@/components/ui/badge";
import { orders, customers } from '../data/data';
import { Order } from "../types";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Download, Eye } from "lucide-react";
import { CSVLink } from 'react-csv';

interface EnhancedOrder extends Order {
  customerName: string;
}

const columns: ColumnDef<EnhancedOrder>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("totalPrice"))
      return <div className="font-medium">${price.toFixed(2)}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant =
        status === "Delivered" || status === "Completed" ? "constructive" :
          status === "Processing" || status === "Shipped" ? "secondary" :
            status === "Pending" ? "warning" : // We don't have warning variant, fallback to secondary or default
              status === "Failed" ? "destructive" : "outline";

      // Since we only have specific variants in Badge component i created: default, secondary, constructive, destructive, outline.
      // I'll map them carefully.
      let badgeVariant: "default" | "secondary" | "constructive" | "destructive" | "outline" = "outline";
      if (status === "Completed" || status === "Delivered") badgeVariant = "constructive";
      else if (status === "Processing" || status === "Shipped") badgeVariant = "secondary";
      else if (status === "Failed") badgeVariant = "destructive";
      else badgeVariant = "secondary"; // Pending

      return <Badge variant={badgeVariant}>{status}</Badge>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
      )
    },
  },
]

const Orders = () => {
  const data: EnhancedOrder[] = React.useMemo(() => {
    return orders.map(order => {
      const customer = customers.find(c => c.id === order.customerId);
      return {
        ...order,
        status: order.status as any,
        customerName: customer ? customer.name : 'Unknown'
      };
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">
            Monitor and manage customer orders and fulfillment status.
          </p>
        </div>
        <CSVLink
          data={data}
          filename={"orders.csv"}
        >
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </CSVLink>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription>
            A comprehensive list of all orders processed in your hub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} searchKey="customerName" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
