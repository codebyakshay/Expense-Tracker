import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ManageExpenses({ route, navigation }) {
  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);
  return (
    <View>
      <Text>Mana geExpenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
