import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="p-4 text-center">
        <ShoppingCart className="mx-auto mb-2" size={24} />
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Order</h2>
      {state.items.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-2 border-b">
          <div className="flex-1">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">GH₵{item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2">
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
              className="p-1 text-red-500 rounded-full hover:bg-red-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>GH₵{state.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};