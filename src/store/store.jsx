import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import expenseReducer from "./expenseSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    auth: authReducer,
  },
});
