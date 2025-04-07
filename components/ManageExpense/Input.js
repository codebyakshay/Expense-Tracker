import { StyleSheet, Text, TextInput, View } from "react-native";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";

export default function Input({ label, textInputConfig, style, inValid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiLine) {
    inputStyles.push(styles.inputMultiline);
  }

  if (inValid) {
    console.log(true);
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
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
