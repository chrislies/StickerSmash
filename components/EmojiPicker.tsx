import { Modal, View, Text, Pressable } from "react-native";
import { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View className="h-[25%] w-full bg-[#25292e] rounded-t-[18px] absolute bottom-0">
        <View className="h-[16%] bg-[#464C55] rounded-t-[10px] px-[20px] flex-row items-center justify-between">
          <Text className="text-base text-white">Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons
              name="close"
              size={22}
              color="white"
            />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
