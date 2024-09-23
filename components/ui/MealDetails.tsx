import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: {
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {" "}
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
