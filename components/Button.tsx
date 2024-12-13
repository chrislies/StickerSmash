import { View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View className="buttonContainer border-4 border-[#ffd33d] rounded-[18px]">
        <Pressable
          className="button bg-white"
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            className="pr-[8px]"
          />
          <Text className="buttonLabel text-[#25292e]">{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View className="buttonContainer">
      <Pressable
        className="button"
        onPress={() => alert("Button pressed")}
      >
        <Text className="buttonLabel text-white">{label}</Text>
      </Pressable>
    </View>
  );
}
