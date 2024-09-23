import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import colors from "../../lib/colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import MealDetails from "./MealDetails";
type RootStackParamList = {
  MealsOverview: undefined;
  MealDetail: { mealId: string };
};

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function pressHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealsContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 4,
  },
  mealsContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.background.card,
    elevation: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
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
