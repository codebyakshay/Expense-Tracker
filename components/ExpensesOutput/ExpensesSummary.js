import { StyleSheet, Text, View } from "react-native";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses?.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum?.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: MainGloabalStyle.colors.primary50,
    borderRadius: 6,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  period: {
    fontSize: 12,
    color: MainGloabalStyle.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: MainGloabalStyle.colors.primary500,
  },
});
