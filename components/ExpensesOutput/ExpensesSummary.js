import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
