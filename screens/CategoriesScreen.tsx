import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/ui/CategoryGridTile";
import { ItemData } from "../lib/types";

export default function CategoriesScreen({ navigation }: { navigation: any }) {
  function renderCategoryItem(itemData: ItemData) {
    function pressHandler() {
      navigation.navigate("Meal", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
