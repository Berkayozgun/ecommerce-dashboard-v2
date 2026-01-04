import * as React from "react"
import { users } from '../data/data';
import { User } from "../types";
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
import { ArrowUpDown, ShieldCheck, UserCog } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="capitalize">{role}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "lastSeen",
    header: "Last Seen",
  },
  {
    id: "actions",
    cell: () => (
      <Button variant="ghost" size="icon">
        <UserCog className="h-4 w-4" />
      </Button>
    )
  }
]

export function UserManagement() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Access Control</h2>
        <p className="text-muted-foreground">
          Manage system users, permissions, and administrative roles.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
          <CardDescription>
            A list of all personnel with access to this management hub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users as User[]} searchKey="name" />
        </CardContent>
      </Card>
    </div>
  );
}

export default UserManagement;