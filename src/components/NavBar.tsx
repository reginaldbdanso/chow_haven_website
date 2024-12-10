import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
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
          <nav>
            <ul className="flex gap-4">
              <li className="flex gap-4 px-4">
                <Link to="/menu" className="text-gray-900 hover:text-red-600">Menu</Link>
                <Link to="/about" className="text-gray-900 hover:text-red-600">About</Link>
                <Link to="/contact" className="text-gray-900 hover:text-red-600">Contact</Link>
                <Link to="/home2" className="text-gray-900 hover:text-red-600">Home2</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;