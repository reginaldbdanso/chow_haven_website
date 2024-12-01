export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  address: string;
  phone: string;
  items: CartItem[];
  totalAmount: number;
  specialInstructions?: string;
}