import { View, Text, StyleSheet } from "react-native";
import colors from "../../lib/colors";
import React from "react";
export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 8,
    marginHorizontal: 84,
    padding: 6,
    borderBottomColor: colors.primary[400],
    borderBottomWidth: 4,
  },
});
