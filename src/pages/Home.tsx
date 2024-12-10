import React from 'react';
import { MenuCard } from '../components/MenuCard';
import { Cart } from '../components/Cart';
import { OrderForm } from '../components/OrderForm';
import { MenuItem } from '../types';
import Banner from '../components/Banner';

interface HomeProps {
  menuItems: MenuItem[];
}

const Home: React.FC<HomeProps> = ({ menuItems }) => {
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md sticky top-8">
              <Cart />
              <div className="p-4 border-t">
                <OrderForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;