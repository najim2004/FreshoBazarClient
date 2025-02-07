import { FavoriteProducts } from "@/apollo/types/favorite.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteProductsState {
  products: FavoriteProducts[];
  loading: boolean;
  error: boolean;
  message: string;
}

const initialState: FavoriteProductsState = {
  products: [],
  loading: false,
  error: false,
  message: "",
};

const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    setFavoriteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFavoriteProducts: (state, action: PayloadAction<FavoriteProducts[]>) => {
      state.products = action?.payload;
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      state.products.push({
        product_id: action.payload,
        addedAt: `${Date.now()}`,
      });
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (p) => p.product_id !== action.payload
      );
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
    },
    resetFavoriteProducts: (state) => {
      state = initialState;
    },
  },
});

// Export actions and reducer
export const {
  setFavoriteLoading,
  setFavoriteProducts,
  setError,
  addFavorite,
  removeFavorite,
  resetFavoriteProducts,
} = favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;
