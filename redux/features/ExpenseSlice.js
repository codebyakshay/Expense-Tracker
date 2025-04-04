import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: "2025-04-02",
  },
  {
    id: "e5",
    description: "Gym Membership",
    amount: 40.0,
    date: "2025-03-22",
  },
];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    // ✅ Add new expense
    addExpense: (state, { payload: { description, amount, date } }) => {
      state.push({
        id: uuid.v4(),
        description,
        amount,
        date,
      });
    },

    // ✅ Remove expense using filter (returns new state)
    removeExpense: (state, action) =>
      state.filter((expense) => expense.id !== action.payload),

    // ✅ Update only the necessary fields instead of replacing the entire object
    updateExpense: (state, { payload: { id, description, amount, date } }) => {
      const expense = state.find((exp) => exp.id === id);
      if (expense) {
        expense.description = description ?? expense.description;
        expense.amount = amount ?? expense.amount;
        expense.date = date ?? expense.date;
      }
    },
  },
});

// ✅ Export actions
export const { addExpense, removeExpense, updateExpense } =
  expenseSlice.actions;

// ✅ Export reducer
export default expenseSlice.reducer;
