import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("29-03-2025"),
  },
  {
    id: "e2",
    description: "A pair of torouser",
    amount: 89.29,
    date: new Date("28-03-2025"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 5.99,
    date: new Date("27-01-2025"),
  },
  {
    id: "e4",
    description: "book",
    amount: 14.99,
    date: new Date("27-02-2025"),
  },
  {
    id: "e5",
    description: "book",
    amount: 18.59,
    date: new Date("27-01-2025"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({});
