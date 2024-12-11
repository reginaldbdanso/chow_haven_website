import React from 'react';

const Orders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-600 text-center py-4">Your order history will appear here</p>
      </div>
    </div>
  );
};

export default Orders;