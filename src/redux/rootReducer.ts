// src/redux/rootReducer.ts

import { combineReducers } from "redux";
import exampleReducer from "./slices/exampleSlice"; // Import example slice

const rootReducer = combineReducers({
  example: exampleReducer, // Add your reducers here
});

export type RootState = ReturnType<typeof rootReducer>; // Type for the root state

export default rootReducer;
