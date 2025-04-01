import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-03-29"), // ✅ Correct format (YYYY-MM-DD)
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-03-28"), // ✅ Correct format
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-01-27"), // ✅ Correct format
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2025-02-27"), // ✅ Correct format
  },
  {
    id: "e5",
    description: "Book",
    amount: 18.59,
    date: new Date("2025-01-27"), // ✅ Correct format
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: MainGloabalStyle.colors.primary700,
    flex: 1,
  },
});
