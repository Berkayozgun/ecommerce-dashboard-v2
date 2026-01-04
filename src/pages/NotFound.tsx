import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
            <h1 className="text-9xl font-extrabold tracking-widest text-primary">404</h1>
            <div className="bg-primary px-2 text-sm rounded rotate-12 absolute text-primary-foreground">
                Page Not Found
            </div>
            <p className="text-muted-foreground pb-4">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link to="/">
                <Button size="lg" className="gap-2">
                    <Home className="h-4 w-4" /> Go Home
                </Button>
            </Link>
        </div>
    )
}
