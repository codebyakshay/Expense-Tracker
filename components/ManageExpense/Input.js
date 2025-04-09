import { StyleSheet, Text, TextInput, View } from "react-native";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";
import { useState } from "react";

export default function Input({
  label,
  textInputConfig,
  style,
  inValid,
  isDate,
}) {
  const inputStyles = [styles.input];
  const [dateValue, setDateValue] = useState(textInputConfig?.value || "");

  const handleChangeText = (text) => {
    const rawText = text.replace(/[^0-9]/g, ""); // digits only
    const isDeleting = text.length < dateValue.length;

    let formatted = "";
    const year = rawText.slice(0, 4);
    const month = rawText.slice(4, 6);
    const day = rawText.slice(6, 8);

    // Don’t auto-add dash if user is deleting
    if (rawText.length <= 4) {
      formatted = year;
      if (rawText.length === 4 && !isDeleting) {
        formatted += "-";
      }
    } else if (rawText.length <= 6) {
      if (month.length === 2) {
        const m = parseInt(month, 10);
        if (m < 1 || m > 12) return;
      }
      formatted = `${year}-${month}`;
      if (rawText.length === 6 && !isDeleting) {
        formatted += "-";
      }
    } else {
      formatted = `${year}-${month}-${day}`;
    }

    // If user is deleting and manually removed the dash — respect it
    if (isDeleting && !text.endsWith("-") && formatted.endsWith("-")) {
      formatted = formatted.slice(0, -1);
    }

    setDateValue(formatted);
    textInputConfig.onChangeText?.(formatted);
  };

  if (textInputConfig?.multiLine) {
    inputStyles.push(styles.inputMultiline);
  }

  if (inValid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={inputStyles}
        value={isDate ? dateValue : textInputConfig?.value}
        onChangeText={isDate ? handleChangeText : textInputConfig?.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: MainGloabalStyle.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: MainGloabalStyle.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: MainGloabalStyle.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: MainGloabalStyle.colors.error500,
  },

  invalidInput: {
    backgroundColor: MainGloabalStyle.colors.error50,
  },
});
