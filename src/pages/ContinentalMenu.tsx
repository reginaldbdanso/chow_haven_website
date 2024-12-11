import React from 'react';
import { MenuCard } from '../components/MenuCard';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuItems';

const ContinentalMenu: React.FC = () => {
  const continentalDishes = menuItems.filter(item => 
    item.category !== 'Local dishes'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Continental Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {continentalDishes.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContinentalMenu;