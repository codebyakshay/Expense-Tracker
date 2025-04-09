//defualt
import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// redux
import {
  addExpense,
  removeExpense,
  updateExpense,
} from "../redux/features/ExpenseSlice";
import { useDispatch, useSelector } from "react-redux";

// global styles
import { MainGloabalStyle } from "../constant/MainGloabalStyle";

//components
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";

// utils
import { deleteExpenses, storeExpense, updateExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
//

// <MAIN SCREEN>
export default function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const allExpenses = useSelector((state) => state.expense);
  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  const selectedExpense = allExpenses.find(
    (expense) => expense.id === editingExpenseId
  );

  async function deleteExpenseFunction() {
    setIsSubmitting(true);

    try {
      await deleteExpenses(editingExpenseId);
      dispatch(removeExpense(editingExpenseId));
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expenses - try again later please!");
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        dispatch(updateExpense({ ...expenseData, id: editingExpenseId }));
        await updateExpenses(editingExpenseId, expenseData);
        setIsSubmitting(false);
      } else {
        const id = await storeExpense(expenseData);
        dispatch(addExpense({ ...expenseData, id: id }));
        setIsSubmitting(false);
      }
      navigation.goBack();
    } catch (err) {
      setError("Cannot Save Data - please try again later");
      setIsSubmitting(false);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  function errorOverlayHandler() {
    setError();
  }

  if (isSubmitting) <LoadingOverlay />;

  if (error && !isSubmitting)
    <ErrorOverlay message={error} onConfirm={errorOverlayHandler} />;

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
