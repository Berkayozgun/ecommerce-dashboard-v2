import * as React from "react"
import { products } from "../data/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Eye, Star } from "lucide-react"

export function Explore() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Marketplace Explore</h2>
        <p className="text-muted-foreground">
          Discover new products and trending items across your categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={`https://avatar.vercel.sh/${product.name}.png?size=400`}
                alt={product.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  4.5
                </div>
              </div>
            </div>
            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </div>
                <div className="font-bold text-lg">${product.price}</div>
              </div>
            </CardHeader>
            <CardFooter className="p-4 pt-0 gap-2">
              <Button variant="outline" className="flex-1" size="sm">
                <Eye className="mr-2 h-4 w-4" /> Details
              </Button>
              <Button className="flex-1" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Explore
