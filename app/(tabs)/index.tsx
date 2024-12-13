import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="container">
      <Text className="text">Hdellod.</Text>
      <Link
        href="/about"
        className="text underline hover:opacity-50"
      >
        Go to About screen
      </Link>
    </View>
  );
}
