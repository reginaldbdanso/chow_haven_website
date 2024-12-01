import React from 'react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-green-600 font-semibold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};