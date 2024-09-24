import React, { useContext } from "react";
import { Text } from "react-native";
import MealsList from "../components/ui/MealsList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavScreen() {
  // const favoritesMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: { favoriteMeals: { ids: string[] } }) => state.favoriteMeals.ids
  );

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return <Text>No favorite meals found. Start adding some!</Text>;
  }

  return <MealsList items={favoriteMeals} />;
}
