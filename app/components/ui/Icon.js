import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { primaryColor } from "../../styles/styles";

export default function Icon({
  name,
  color = `${primaryColor}`,
  action,
  size,
  clickAble,
}) {
  return clickAble ? (
    <Pressable onPress={action}>
      <Ionicons name={name} size={size ? size : 24} color={color} />
    </Pressable>
  ) : (
    <Ionicons name={name} size={size ? size : 24} color={color} />
  );
}
