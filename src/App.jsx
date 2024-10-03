import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import Help from "./pages/Help";
import UserManagement from "./pages/UserManagement";
import Analytics from "./pages/Analytics";
import Explore from "./pages/Explore";
import Shop from "./pages/Shop";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import RightPanel from "./components/RightPanel";
import { topCountries, topCustomers, recentOrders } from "./data/data"; 

const App = () => {
  return (
    <Router>
      <div className=''>
        <div className='flex'>
          <Sidebar />
          <div className='flex-1 p-4 flex flex-col'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/products' element={<Products />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/help' element={<Help />} />
              <Route path='/user-management' element={<UserManagement />} />
            </Routes>
          </div>
          <RightPanel
            topCountries={topCountries}
            topCustomers={topCustomers}
            recentOrders={recentOrders}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
