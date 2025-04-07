import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { MainGloabalStyle } from "../constant/MainGloabalStyle";
import Button from "../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../redux/features/ExpenseSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();

  const allExpenses = useSelector((state) => state.expense);
  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  const selectedExpense = allExpenses.find(
    (expense) => expense.id === editingExpenseId
  );

  function deleteExpenseFunction() {
    dispatch(removeExpense(editingExpenseId));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(updateExpense({ ...expenseData, id: editingExpenseId }));
    } else {
      dispatch(addExpense(expenseData));
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
      <ExpenseForm
        onCancel={cancelHandler}
        isEditing={isEditing}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

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
});
