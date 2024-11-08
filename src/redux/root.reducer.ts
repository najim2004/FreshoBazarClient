// src/redux/rootReducer.ts

import { combineReducers } from "redux";
import exampleReducer from "./slices/exampleSlice"; // Import example slice
import favoriteProductsReducer from "./slices/favoriteProduct.slice";

const rootReducer = combineReducers({
  example: exampleReducer,
  favoriteProducts: favoriteProductsReducer, // Add your reducers here
});

export type RootState = ReturnType<typeof rootReducer>; // Type for the root state

export default rootReducer;
