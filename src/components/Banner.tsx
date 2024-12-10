import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] mb-12">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80"
        alt="Featured dish"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Chop Haven</h1>
        <p className="text-xl">Discover our delicious menu and special offers</p>
      </div>
    </div>
  );
};

export default Banner;