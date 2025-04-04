import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { MainGloabalStyle } from "../constant/MainGloabalStyle";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../redux/features/ExpenseSlice";

export default function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();

  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  function deleteExpenseFunction() {
    dispatch(removeExpense(editingExpenseId));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editingExpenseId,
          description: "Test2!-Update",
          amount: 250,
          date: "2025-04-04",
        })
      );
    } else {
      dispatch(
        addExpense({
          description: "Test!!!-Add",
          amount: 250,
          date: "2025-04-01",
        })
      );
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteConatine}>
          <IconButton
            name={"trash"}
            color={MainGloabalStyle.colors.error500}
            size={36}
            onPress={() => {
              return deleteExpenseFunction();
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: MainGloabalStyle.colors.primary800,
  },

  deleteConatine: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: MainGloabalStyle.colors.primary200,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
