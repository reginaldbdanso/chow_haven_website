import React, { useState, useRef, useEffect } from 'react';
import { UtensilsCrossed, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useCart } from '../context/CartContext';

const NavBar: React.FC = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-1 text-gray-900 hover:text-red-600"
                  >
                    Menu
                    <ChevronDown size={16} />
                  </button>
                  {isMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link
                        to="/menu/local"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Local Dishes
                      </Link>
                      <Link
                        to="/menu/continental"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Continental Dishes
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/orders" className="text-gray-900 hover:text-red-600">Orders</Link>
                <Link to="/contact" className="text-gray-900 hover:text-red-600">Contact</Link>
              </li>
              <li className="flex items-center gap-6 ml-6 border-l pl-6">
                <Link to="/cart" className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
                <UserMenu />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;