import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// ✅ Fix: Declare initialState as an array
const initialState = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: "2025-03-29",
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: "2025-03-28",
  },
];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, { payload: { description, amount, date } }) => {
      const newExpense = {
        id: uuidv4(),
        description,
        amount,
        date,
      };
      state.push(newExpense);
    },

    removeExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },

    updateExpense: (state, { payload: { id, description, amount, date } }) => {
      const index = state.findIndex((expense) => expense.id === id);
      if (index !== -1) {
        state[index] = { id, description, amount, date };
      }
    },
  },
});

export const { addExpense, removeExpense, updateExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
