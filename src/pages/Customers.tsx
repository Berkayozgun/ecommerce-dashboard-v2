
import { customers } from '../data/data';
import { Customer } from "../types";
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
import { ArrowUpDown, Mail, Phone, MapPin, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Mail className="h-3 w-3 text-muted-foreground" />
        {row.getValue("email")}
      </div>
    )
  },
  {
    accessorKey: "mobile",
    header: "Phone",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Phone className="h-3 w-3 text-muted-foreground" />
        {row.getValue("mobile")}
      </div>
    )
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <MapPin className="h-3 w-3 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{row.getValue("address")}</span>
      </div>
    )
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(customer.email)}
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>Edit details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function Customers() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Customer Directory</h2>
        <p className="text-muted-foreground">
          Maintain and view your customer relationships and communication details.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Profiles</CardTitle>
          <CardDescription>
            A searchable list of all registered customers in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={customers} searchKey="name" />
        </CardContent>
      </Card>
    </div>
  );
}

export default Customers;