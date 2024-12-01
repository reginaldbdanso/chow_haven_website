const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = 'http://localhost:4000/api';

export const fetchMenu = async () => {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) {
    throw new Error('Failed to fetch menu');
  }
  return response.json();
};

export const submitOrder = async (orderData: any) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    throw new Error('Failed to submit order');
  }
  return response.json();
};