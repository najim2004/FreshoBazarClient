import { Category } from "@/apollo/types/category.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State Interface
interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: boolean | null;
  message: string;
}

// Initial State
const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
  message: "",
};

// Slice Definition
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
      state.message = "";
    },
  },
});

// Actions export
export const { setCategories, setLoading, setError, clearError } =
  categoriesSlice.actions;

// Reducer export
export default categoriesSlice.reducer;
