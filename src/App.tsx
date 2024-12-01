import React, { useEffect, useState } from 'react';
import { MenuCard } from './components/MenuCard';
import { Cart } from './components/Cart';
import { OrderForm } from './components/OrderForm';
import { CartProvider } from './context/CartContext';
import { UtensilsCrossed } from 'lucide-react';
import { fetchMenu } from './services/api';
import { MenuItem } from './types';

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchMenu();
        setMenuItems(data);
      } catch (err) {
        setError('Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-green-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Fresh Bites</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
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
        </main>
      </div>
    </CartProvider>
  );
}

export default App;