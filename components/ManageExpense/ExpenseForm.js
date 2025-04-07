import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormatedDate } from "../../utils/date";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues?.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChnageHandler(inputIdentifie, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifie]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const amount = +inputs.amount.value;
    const date = new Date(inputs.date.value);
    const description = inputs.description.value.trim();

    const isAmountValid = !isNaN(amount) && amount > 0;
    const isDateValid = !isNaN(date.getTime()) && date.getFullYear() >= 1971;
    const isDescriptionValid = description.length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setInputs((currentInputs) => {
        return {
          amount: {
            value: currentInputs.amount.value,
            isValid: isAmountValid,
          },
          date: {
            value: currentInputs.date.value,
            isValid: isDateValid,
          },
          description: {
            value: currentInputs.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
      return;
    }

    const expenseData = {
      amount,
      date: date.toISOString(), // <-- fix right here
      description,
    };

    console.log(expenseData);
    onSubmit(expenseData);
  }

  const isFormInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  //

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{submitButtonLabel} Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label={"Amount"}
          inValid={!inputs.amount.isValid}
          textInputConfig={{
            value: inputs.amount.value,
            keyboardType: "decimal-pad",
            onChangeText: (text) => {
              return inputChnageHandler("amount", text);
            },
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          inValid={!inputs.date.isValid}
          textInputConfig={{
            keyboardType: "number-pad",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (text) => {
              return inputChnageHandler("date", text);
            },
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label={"Description"}
        inValid={!inputs.description.isValid}
        textInputConfig={{
          multiLine: true,
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText: (text) => {
            return inputChnageHandler("description", text);
          },
          value: inputs.description?.value,
        }}
      />
      {isFormInvalid && (
        <Text style={styles.errorText}>
          Invalid Input values - please check again
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: MainGloabalStyle.colors.error500,
    margin: 8,
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
