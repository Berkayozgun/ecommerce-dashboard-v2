import * as React from "react"
import { products } from "../data/data"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Filter } from "lucide-react"

export function Shop() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Supply Shop</h2>
          <p className="text-muted-foreground">
            Procure inventory and business essentials.
          </p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{product.name}</span>
                <span className="text-primary">${product.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground italic">
                Product Image Placeholder
              </div>
              <Button className="w-full">
                <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Shop
