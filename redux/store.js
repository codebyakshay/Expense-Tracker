import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/ExpenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});
