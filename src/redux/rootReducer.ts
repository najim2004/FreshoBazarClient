// src/redux/rootReducer.ts

import { combineReducers } from "redux";
import categoriesReducer from "./slices/categoriesSlice"; // Import categories slice
import favoriteProductsReducer from "./slices/favoriteProductSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  favoriteProducts: favoriteProductsReducer, // Add your reducers here
});

export type RootState = ReturnType<typeof rootReducer>; // Type for the root state

export default rootReducer;
