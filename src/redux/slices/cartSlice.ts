import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a cart item
interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  thumbnail: string;
}

// Define the shape of a cart
export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  status: "pending" | "active" | "cancelled"; // Use a more specific type for status
  createdAt?: Date; // Using string to store date in ISO 8601 format
  updatedAt?: Date; // Same as above
}

// Define the shape of the cart state
interface CartState {
  cart: Cart | null; // Cart can be null initially to indicate an empty cart
}

// Initial state with an empty cart object
const initialState: CartState = {
  cart: null,
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Sets the entire cart object in the state
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    // Optionally add more reducers for other cart actions, e.g., addItem, removeItem, updateItem
    clearCart: (state) => {
      state.cart = null;
    },
  },
});

// Export actions and reducer
export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
