import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  productId: string;
  addedAt?: Date;
}

interface Favorites {
  _id: string;
  userId: string;
  products?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface FavoriteProductsState {
  favoriteProducts: {
    success?: boolean;
    error?: boolean;
    error_message?: string | null;
    data?: Favorites;
  };
}

const initialState: FavoriteProductsState = {
  favoriteProducts: {
    success: false,
    error: false,
    error_message: null,
    data: undefined,
  },
};

const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    setFavoriteProducts: (state, action: PayloadAction<Favorites>) => {
      state.favoriteProducts = {
        ...state.favoriteProducts,
        success: true,
        error: false,
        error_message: null,
        data: action.payload,
      };
    },
    setError: (state, action: PayloadAction<string>) => {
      state.favoriteProducts = {
        ...state.favoriteProducts,
        success: false,
        error: true,
        error_message: action.payload,
      };
    },
    resetFavoriteProducts: (state) => {
      state.favoriteProducts = initialState.favoriteProducts;
    },
  },
});

// Export actions and reducer
export const { setFavoriteProducts, setError, resetFavoriteProducts } =
  favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;
