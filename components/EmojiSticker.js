import { View, Image } from 'react-native'; // Importaciones por defecto fueron reemplazadas por Animated.
import { Gesture, GestureDetector } from 'react-native-gesture-handler'; // Libreria de gestos
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'; 


// Contenedor de sticker (como se va a mostrar)
export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);

  //Permite cambiar tamaño de imagen al dar doble tap
  const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    }
  });
  
  // Animacion de tamaño de imagen
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  
  // Permite mover el sticker (suma posicion actual con el cambio de posicion a tiempo real)
  const drag = Gesture.Pan()
  .onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });
  
  // Animacion de movimiento del sticker
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  

  return (
    <GestureDetector gesture={drag}> 
    <Animated.View style={[containerStyle, { top: -250, right: -100 }]}>
      <GestureDetector gesture={doubleTap}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={[imageStyle, { width: imageSize, height: imageSize }]}
      />
      </GestureDetector>
    </Animated.View>
    </GestureDetector>
  );
}
