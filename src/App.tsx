import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuCard } from './components/MenuCard';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { fetchMenu } from './services/api';
import { MenuItem } from './types';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import CartPage from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LocalMenu from './pages/LocalMenu';
import ContinentalMenu from './pages/ContinentalMenu';

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
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home menuItems={menuItems} />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/local" element={<LocalMenu />} />
              <Route path="/menu/continental" element={<ContinentalMenu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;