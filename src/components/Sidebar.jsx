import { Link } from "react-router-dom";
import HomeIcon from "../assets/home.svg"; // SVG dosyalarını içe aktar
import AnalyticsIcon from "../assets/analytics.svg";
import ExploreIcon from "../assets/explore.svg";
import ShopIcon from "../assets/shop.svg";
import ChatIcon from "../assets/chat.svg";
import HelpIcon from "../assets/help.svg";
import UserManagementIcon from "../assets/user-management.svg";
import LogoutIcon from "../assets/logout.svg";
import ProductsIcon from "../assets/products.svg"; // Ürün simgesini içe aktar

const Sidebar = () => {
  return (
    <div className='bg-white text-black w-64 h-screen p-4 hidden md:block'>
      <h2 className='text-2xl font-bold mb-4'>Admin Panel</h2>
      <nav>
        <ul className='flex flex-col p-8 gap-8'>
          <li>
            <Link className='flex items-center hover:scale-110' to='/'>
              <img src={HomeIcon} alt='Home' className='mr-2' />
              Home
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/analytics'>
              <img src={AnalyticsIcon} alt='Analytics' className='mr-2' />
              Analytics
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/explore'>
              <img src={ExploreIcon} alt='Explore' className='mr-2' />
              Explore
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/shop'>
              <img src={ShopIcon} alt='Shop' className='mr-2' />
              Shop
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/chat'>
              <img src={ChatIcon} alt='Chat' className='mr-2' />
              Chat
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/help'>
              <img src={HelpIcon} alt='Help' className='mr-2' />
              Help
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/products'>
              <img src={ProductsIcon} alt='Products' className='mr-2' />
              Products
            </Link>
          </li>{" "}
          {/* Products bağlantısı eklendi */}
          <li>
            <Link
              className='flex items-center hover:scale-110'
              to='/user-management'
            >
              <img
                src={UserManagementIcon}
                alt='User Management'
                className='mr-2'
              />
              User Management
            </Link>
          </li>
          <li>
            <Link className='flex items-center hover:scale-110' to='/logout'>
              <img src={LogoutIcon} alt='Logout' className='mr-2' />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
