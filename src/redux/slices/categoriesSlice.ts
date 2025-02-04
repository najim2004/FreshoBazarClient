import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types and Interfaces
export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

// State Type
type CategoriesState = Category[];

// Initial State
const initialState: CategoriesState = [];

// Slice Definition
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (_, action: PayloadAction<Category[]>) => {
      // Return new state array to maintain immutability
      return action.payload;
    },
  },
});

// Exports
export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
