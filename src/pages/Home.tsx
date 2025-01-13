import React, { useState, useEffect } from 'react';
import { MenuCard } from '../components/MenuCard';
import { Cart } from '../components/Cart';
import { OrderForm } from '../components/OrderForm';
import { MenuItem } from '../types';
import Banner from '../components/Banner';
import { Clock, Bike, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

interface HomeProps {
  menuItems: MenuItem[];
}

const specialMenus = [
  {
    title: "Weekend Special",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    description: "Indulge in our premium weekend feast",
    price: "₵29.99"
  },
  {
    title: "Sunday Family Feast",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    description: "Perfect for family gatherings",
    price: "₵49.99"
  },
  {
    title: "Chef's Special",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    description: "Expertly crafted signature dishes",
    price: "₵34.99"
  }
];

const Home: React.FC<HomeProps> = ({ menuItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specialMenus.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specialMenus.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specialMenus.length) % specialMenus.length);
  };

  return (
    <main>
      <Banner />
      
      {/* Animated Promos Title */}
      <div className="relative py-12 overflow-hidden bg-gradient-to-r from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-4">
              <Sparkles className="text-red-600 animate-pulse" size={32} />
              <h2 className="text-5xl font-bold text-gray-800 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600 animate-gradient">
                  Promos
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 animate-expand" />
              </h2>
              <Sparkles className="text-red-600 animate-pulse" size={32} />
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Special Menu Carousel Section */}
      <div className="relative overflow-hidden bg-gray-900 py-16">
        {/* Rest of the existing code... */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={specialMenus[currentSlide].image}
            alt={specialMenus[currentSlide].title}
            className="w-full h-full object-cover opacity-50 transform scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left text-white md:w-1/2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Star className="text-yellow-400" fill="currentColor" />
                <span className="text-yellow-400 font-semibold">FEATURED SPECIAL</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {specialMenus[currentSlide].title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {specialMenus[currentSlide].description}
              </p>
              <div className="text-3xl font-bold text-yellow-400 mb-8">
                {specialMenus[currentSlide].price}
              </div>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                Order Now
              </button>
            </div>
            
            <div className="flex gap-4 md:w-1/2 justify-center">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {specialMenus.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-600 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the existing code... */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="my-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center justify-center bg-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Bike size={48} className="text-red-600" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Swift Delivery Service</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-lg text-gray-600">
                <Clock size={24} className="text-red-600" />
                <span>Always on time, every time</span>
              </div>
              <p className="mt-2 text-gray-600 max-w-md">
                Experience lightning-fast delivery with our dedicated riders. 
                We ensure your food arrives hot and fresh at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;