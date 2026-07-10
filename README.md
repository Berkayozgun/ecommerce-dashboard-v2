# 📊 Enterprise E-Commerce Analytics Hub

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TanStack](https://img.shields.io/badge/TanStack_Table-FF4154?style=for-the-badge)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

A high-performance, enterprise-grade admin dashboard designed for real-time data visualization and streamlined ecommerce operations. This project transforms complex datasets into actionable business intelligence using modern frontend architectures.

## ✨ Core Features & Architecture

* **Advanced Data Grids:** Implemented `TanStack Table` for highly optimized, client-side data filtering, sorting, and pagination across massive datasets.
* **Real-Time Data Visualization:** Integrated `Chart.js` to render responsive and interactive statistical charts for sales, revenue, and user analytics.
* **Accessible UI Components:** Built with `Radix UI` primitives to ensure strict WAI-ARIA compliance and keyboard navigation.
* **Optimized Build Tooling:** Powered by `Vite` for lightning-fast HMR (Hot Module Replacement) and optimized production bundles.
* **State & Theming:** Managed complex UI states and dynamic theming seamlessly across the application.

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Berkayozgun/ecommerce-dashboard-v2.git
cd ecommerce-dashboard-v2
npm install
```

### 2. Local Development
Start the Vite development server with hot-reloading:
```bash
npm run dev
```

### 3. Production Build
Create an optimized production build:
```bash
npm run build
npm run preview
```

## 🧪 Automated Checks
This repository is equipped with **GitHub Actions**. Every push to the `main` branch triggers an automated CI workflow that validates dependency resolution and ensures the Vite build succeeds without errors, guaranteeing deployment stability.
