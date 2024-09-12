import { createSlice } from "@reduxjs/toolkit";
import { incomeInfo } from "./data";

const incomeSlice = createSlice({
  name: "income",
  initialState: incomeInfo,
  reducers: {
    addIncome: (state, action) => {
      state.unshift(action.payload);
    },
    updateIncome: (state, action) => {
      const { index, updatedIncome } = action.payload;
      if (state[index]) {
        state[index] = updatedIncome;
      }
    },
    deleteIncome: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addIncome, updateIncome, deleteIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
