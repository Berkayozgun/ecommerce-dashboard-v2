import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    BarChart3,
    Search,
    ShoppingBag,
    MessageSquare,
    Settings,
    ShoppingCart,
    Users,
    Package,
    CreditCard,
    HelpCircle,
    ShieldCheck,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { title: "Dashboard", href: "/", icon: LayoutDashboard },
    { title: "Analytics", href: "/analytics", icon: BarChart3 },
    { title: "Products", href: "/products", icon: Package },
    { title: "Orders", href: "/orders", icon: ShoppingCart },
    { title: "Customers", href: "/customers", icon: Users },
    { title: "Transactions", href: "/transactions", icon: CreditCard },
    { title: "User Management", href: "/user-management", icon: ShieldCheck },
    { type: "divider" },
    { title: "Explore", href: "/explore", icon: Search },
    { title: "Shop", href: "/shop", icon: ShoppingBag },
    { title: "Chat", href: "/chat", icon: MessageSquare },
    { title: "Settings", href: "/settings", icon: Settings },
    { title: "Help", href: "/help", icon: HelpCircle },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <div className="hidden border-r bg-muted/20 md:block w-64 lg:w-72">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6">
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <span className="">Management Hub</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium gap-1">
                        {sidebarLinks.map((link, index) => {
                            if (link.type === "divider") {
                                return <div key={index} className="my-2 border-t" />;
                            }
                            const Icon = link.icon!;
                            const isActive = location.pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href!}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:bg-muted/80",
                                        isActive ? "bg-muted text-primary font-semibold" : "text-muted-foreground"
                                    )}
                                >
                                    <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "")} />
                                    {link.title}
                                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
