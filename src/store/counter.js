import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const counter = counterSlice.reducer;
export const counterActions = counterSlice.actions;

export default counter;
// export default  counterActions = counterSlice.actions;
