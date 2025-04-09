import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: MainGloabalStyle.colors.primary700,
  },
});
