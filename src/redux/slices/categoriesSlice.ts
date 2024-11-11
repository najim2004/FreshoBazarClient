import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of each category in the action payload
export interface Category {
  _id: string;
  name: string;
  slug: string;
  subcategories?: Array<{ name: string; slug: string }>;
}

// Define the shape of the Categories state
interface CategoriesState {
  Categories: Category[];
}

// Initial state with an empty Categories array
const initialState: CategoriesState = {
  Categories: [],
};

// Create the categories slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Sets the entire Categories array in the state
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.Categories = action.payload;
    },
  },
});

// Export actions and reducer
export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
