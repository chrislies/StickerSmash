import { View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, type ImageSource } from "expo-image";
import { cssInterop } from "nativewind";
cssInterop(Image, { className: "style" });
// https://www.nativewind.dev/api/css-interop
// cssInterop function "tags" components so that when its rendered, the runtime will know to resolve the className strings into styles. You should only use this when:
// - You have a custom native component
// - You are using a third party component that needs the style prop to be resolved
// - You are using a thrid party component that does not pass all its props to its children

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("No image selected");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = async () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <View className="flex-1">
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-[80px]">
          <View className="flex-row items-center">
            <IconButton
              icon="refresh"
              label="Reset"
              onPress={onReset}
            />
            <CircleButton onPress={onAddSticker}></CircleButton>
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View className="mb-8 items-center">
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>
    </View>
  );
}
