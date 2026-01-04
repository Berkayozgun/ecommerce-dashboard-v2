import * as React from "react"
import { transactions } from '../data/data';
import { Transaction } from "../types";
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
import { ArrowUpDown } from "lucide-react";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "buyer",
    header: "Customer",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium ml-4">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className={status === "Completed" ? "text-green-600 font-semibold" : "text-yellow-600 font-semibold"}>
          {status}
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: "Method",
  },
]

export function Transactions() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Audit Log</h2>
        <p className="text-muted-foreground">
          Detailed history of all financial transactions and operational movements.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial Transactions</CardTitle>
          <CardDescription>
            Real-time ledger of incoming revenue and customer purchases.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={transactions} searchKey="buyer" />
        </CardContent>
      </Card>
    </div>
  );
}

export default Transactions;