export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    photo?: string;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    address: string;
    mobile: string;
    spent: number;
    lastOrder: string;
}

export interface Order {
    id: number;
    customerId: number;
    totalPrice: number;
    status: 'Pending' | 'Completed' | 'Shipped' | 'Processing' | 'Delivered' | 'Failed';
    date: string;
}

export interface Transaction {
    id: number;
    date: string;
    amount: number;
    type: string;
    status: string;
    product: string;
    buyer: string;
    shippingStatus: string;
    trackingNumber: string;
    notes?: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    status: 'Active' | 'Inactive';
}

export interface Analytics {
    month: string;
    revenue: number;
    sales: number;
    newCustomers: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    lastSeen: string;
}

export interface TransactionStats {
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    totalCustomers: number;
}
