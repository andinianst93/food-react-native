import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconBtn({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color="yellow" />
    </Pressable>
  );
}
