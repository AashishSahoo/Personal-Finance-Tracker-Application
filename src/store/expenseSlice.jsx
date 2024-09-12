import { createSlice } from "@reduxjs/toolkit";
import { expenseInfo } from "./data";

const expenseSlice = createSlice({
  name: "expense",
  initialState: expenseInfo,
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload);
    },
    updateExpense: (state, action) => {
      const { index, updatedExpense } = action.payload;
      if (state[index]) {
        state[index] = updatedExpense;
      }
    },
    deleteExpense: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
