import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/ui/MealItem";

export default function MealsOverviewScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (cat) => cat.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMeal(itemData: any) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return (
      <MealItem
        id={mealItemProps.id}
        title={mealItemProps.title}
        imageUrl={mealItemProps.imageUrl}
        duration={mealItemProps.duration}
        complexity={mealItemProps.complexity}
        affordability={mealItemProps.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
        // numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
