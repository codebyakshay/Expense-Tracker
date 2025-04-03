import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

export default function AllExpenses() {
  const allExpenses = useSelector((state) => state.expense);

  return <ExpensesOutput expensesPeriod={"Total"} expenses={allExpenses} />;
}

const styles = StyleSheet.create({});
