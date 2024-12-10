import React from 'react';
import { UtensilsCrossed, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useCart } from '../context/CartContext';

const NavBar: React.FC = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-gray-900 hover:text-red-600">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-red-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Chop Haven</h1>
            </div>
          </Link>
          
          <nav className="flex items-center">
            <ul className="flex gap-4 items-center">
              <li className="flex gap-4 px-4">
                <Link to="/menu" className="text-gray-900 hover:text-red-600">Menu</Link>
                <Link to="/about" className="text-gray-900 hover:text-red-600">About</Link>
                <Link to="/contact" className="text-gray-900 hover:text-red-600">Contact</Link>
                <Link to="/home2" className="text-gray-900 hover:text-red-600">Home2</Link>
              </li>
              <li className="flex items-center gap-6 ml-6 border-l pl-6">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <UserMenu isLoggedIn={false} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;