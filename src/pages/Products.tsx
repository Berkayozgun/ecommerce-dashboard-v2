import * as React from "react"
import { products as initialProducts } from '../data/data';
import { Product } from "../types";
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
import { Input } from "@/components/ui/input";
import { MoreHorizontal, ArrowUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium ml-4">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
      return <div className="font-medium ml-4">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original

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
              onClick={() => navigator.clipboard.writeText(product.id.toString())}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const Products = () => {
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.description && newProduct.category) {
      const product: Product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        description: newProduct.description,
        category: newProduct.category,
      };
      setProducts([product, ...products]);
      setNewProduct({ name: '', price: '', description: '', category: '' });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Product Catalog</h2>
        <p className="text-muted-foreground">
          Manage your inventory and product listings from this centralized hub.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>
            Enter details to add a new item to your management hub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddProduct} className="flex flex-wrap gap-4">
            <Input
              className="max-w-[200px]"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <Input
              className="max-w-[150px]"
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <Input
              className="flex-1"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
            <Input
              className="max-w-[150px]"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleInputChange}
            />
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory List</CardTitle>
          <CardDescription>
            All current products available in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={products} searchKey="name" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
