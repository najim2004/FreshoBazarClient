// src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Import root reducer

const store = configureStore({
  reducer: rootReducer,
});

// Type for the AppDispatch
export type AppDispatch = typeof store.dispatch; // Define AppDispatch type based on store dispatch

export default store;
