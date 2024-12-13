import { Image, type ImageSource } from "expo-image";
import { cssInterop } from "nativewind";
cssInterop(Image, { className: "style" });
// https://www.nativewind.dev/api/css-interop
// cssInterop function "tags" components so that when its rendered, the runtime will know to resolve the className strings into styles. You should only use this when:
// - You have a custom native component
// - You are using a third party component that needs the style prop to be resolved
// - You are using a thrid party component that does not pass all its props to its children

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return (
    <Image
      source={imgSource}
      className="w-[320px] h-[440px] rounded-[18px]"
    />
  );
}
