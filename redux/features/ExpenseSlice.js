import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-04-02"), // ✅ Within 7 days
  },
  {
    id: "e2",
    description: "Dinner at a Restaurant",
    amount: 35.5,
    date: new Date("2025-03-31"), // ✅ Within 7 days
  },
  {
    id: "e3",
    description: "Movie Tickets",
    amount: 25.0,
    date: new Date("2025-03-29"), // ✅ Within 7 days
  },
  {
    id: "e4",
    description: "Internet Bill",
    amount: 60.0,
    date: new Date("2025-03-24"), // ❌ OUTSIDE 7 days
  },
  {
    id: "e5",
    description: "Gym Membership",
    amount: 40.0,
    date: new Date("2025-03-22"), // ❌ OUTSIDE 7 days
  },
];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    // ✅ Add new expense
    addExpense: (state, { payload: { description, amount, date } }) => {
      state.push({
        id: uuidv4(), // Generate a unique ID
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
