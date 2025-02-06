import { Cart } from "@/apollo/types/cart.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the cart state
interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

// Initial state with proper typing
const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
      state.error = null;
    },
    clearCart: (state) => {
      state.cart = null;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setCart, clearCart, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;
