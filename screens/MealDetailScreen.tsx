import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/ui/MealDetails";
import Subtitle from "../components/ui/Subtitle";
import List from "../components/ui/List";
import IconBtn from "../components/ui/IconBtn";
import { FavoritesContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  // const favoritesMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: { favoriteMeals: { ids: string[] } }) => state.favoriteMeals.ids
  );
  const dispatch = useDispatch();

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const IsFavorite = favoriteMealIds.includes(mealId);

  function handlerBtnPressHandler() {
    if (IsFavorite) {
      // favoritesMealContext.removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
    } else {
      // favoritesMealContext.addFavorite(mealId);
      dispatch(addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => {
        return (
          <IconBtn
            onPress={handlerBtnPressHandler}
            color={IsFavorite ? "yellow" : "white"}
          />
        );
      },
    });
  }, [navigation, selectedMeal, IsFavorite]);

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
