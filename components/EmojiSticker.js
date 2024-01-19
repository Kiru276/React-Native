import { View, Image } from 'react-native';


// Contenedor de sticker (como se va a mostrar)
export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -250, right: -100 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
