// types.ts
export interface CartItem {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
  discount_value: number;
  thumbnail: string;
}

export interface Cart {
  _id: string;
  user_id: string;
  items: CartItem[];
  total_quantity: number;
  total_price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartPayload {
  success: boolean;
  message: string;
  cart: Cart | null;
  error?: {
    code: string;
    details: string | any;
  } | null;
}

export interface CartInput {
  product_id: string;
  quantity: number;
}
