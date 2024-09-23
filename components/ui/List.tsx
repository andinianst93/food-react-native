import { View, Text, StyleSheet } from "react-native";
import colors from "../../lib/colors";

export default function List({ data }: { data: string[] }) {
  return (
    <View>
      {data.map((dataPoint, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.primary[500],
    borderColor: colors.primary[400],
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    color: colors.primary[50],
    textAlign: "center",
  },
});
