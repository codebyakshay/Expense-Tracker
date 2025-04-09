import { createSlice } from "@reduxjs/toolkit";

// ✅ Initial state: now empty
const initialState = [];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    // ✅ Add new expense using the ID passed from outside (Firebase)
    addExpense: (state, { payload: { id, description, amount, date } }) => {
      state.push({
        id,
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

    // ✅ Set expenses (like useReducer)
    setExpenses: (state, action) => {
      return action.payload.slice().reverse(); // to mimic the context behavior
    },
  },
});

// ✅ Export actions
export const { addExpense, removeExpense, updateExpense, setExpenses } =
  expenseSlice.actions;

// ✅ Export reducer
export default expenseSlice.reducer;
