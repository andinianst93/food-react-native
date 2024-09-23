import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/ui/MealDetails";
import Subtitle from "../components/ui/Subtitle";
import List from "../components/ui/List";
import IconBtn from "../components/ui/IconBtn";

export default function MealDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function handlerBtnPressHandler() {
    console.log("Button pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => {
        return <IconBtn onPress={handlerBtnPressHandler} />;
      },
    });
  }, [navigation, selectedMeal]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{selectedMeal?.title}</Text>
      </View>
      <MealDetails
        duration={selectedMeal?.duration ?? 0}
        complexity={selectedMeal?.complexity ?? ""}
        affordability={selectedMeal?.affordability ?? ""}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients ?? []} />
        </View>
        <View>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps ?? []} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  textContainer: {
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginVertical: 4,
  },
  contentInnerContainer: {
    flexDirection: "column",
    marginVertical: 4,
  },
});
