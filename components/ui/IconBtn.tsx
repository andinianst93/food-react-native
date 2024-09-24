import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconBtn({
  onPress,
  color,
}: {
  onPress: () => void;
  color?: string;
}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color={color} />
    </Pressable>
  );
}
