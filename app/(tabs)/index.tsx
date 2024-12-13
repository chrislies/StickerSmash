import { Text, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View className="container">
      <View className="flex-1 pt-[28px]">
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View className="mb-8 items-center">
        <Button
          theme="primary"
          label="Choose a photo"
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
