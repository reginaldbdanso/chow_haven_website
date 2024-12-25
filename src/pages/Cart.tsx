import React from 'react';
import { useCart } from '../context/CartContext';
import { OrderForm } from '../components/OrderForm';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                    })}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: item.quantity + 1 }
                    })}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className="p-1 text-red-500 rounded-full hover:bg-red-50 ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>GH₵ {state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>GH₵ {state.total.toFixed(2)}</span>
              </div>
            </div>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;