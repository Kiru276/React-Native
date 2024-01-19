import { StyleSheet, Image } from 'react-native';

// Contenedor de foto (como se va a mostrar)
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const ImageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return (
    <Image source={ImageSource} style={styles.image} /> //admite  imagenes y gifs
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
