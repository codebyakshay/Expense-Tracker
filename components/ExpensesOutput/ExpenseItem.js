import { Pressable, StyleSheet, Text, View } from "react-native";
import { MainGloabalStyle } from "../../constant/MainGloabalStyle";
import { getFormatedDate } from "../../utils/date";

export default function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.item}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: MainGloabalStyle.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,

    elevation: 3,
    shadowColor: MainGloabalStyle.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },

  textBase: {
    color: MainGloabalStyle.colors.primary50,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: MainGloabalStyle.colors.primary500,
    fontWeight: "bold",
  },
});
