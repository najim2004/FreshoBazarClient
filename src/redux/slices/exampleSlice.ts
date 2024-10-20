import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  count: number;
}

const initialState: ExampleState = {
  count: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // Increment count
    },
    decrement: (state) => {
      state.count -= 1; // Decrement count
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload; // Set count to a specific value
    },
  },
});

// Export actions and reducer
export const { increment, decrement, setCount } = exampleSlice.actions;
export default exampleSlice.reducer;
