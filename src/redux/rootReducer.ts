// src/redux/rootReducer.ts

import { combineReducers } from "redux";
import categoriesReducer from "./slices/categories.slice"; // Import categories slice
import favoriteProductsReducer from "./slices/favoriteProduct.slice";
import cartReducer from "./slices/cart.slice";
import userReducer from "./slices/user.slice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  favoriteProducts: favoriteProductsReducer, // Add your reducers here
  myCart: cartReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // Type for the root state

export default rootReducer;
