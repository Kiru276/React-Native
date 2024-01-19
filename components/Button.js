import { StyleSheet, Pressable, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


// Los 2 botones del inicio
export default function Button({ label, theme, onPress }) {
    // Boton "Elegir foto"
    if (theme === "primary") { // Si es boton "Elegir foto"
        return (
          // Borde amarillo redonde de boton "Elegir foto
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#11d33d", borderRadius: 18 }]}> 

            <Pressable
            
                style={[styles.button, { backgroundColor: "#fff" }]} //color de fondo del boton "Elegir foto"
                onPress={onPress}
            >
                <FontAwesome
                    name="picture-o"
                    size={18} //Tamaño de pixeles icono
                    color="#25292e" //Color icono
                    style={styles.buttonIcon} //Estilos especiales de icono (espaciado entre icono y texto)
                />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>  

            </Pressable>
          </View>
        );
      }
      
      // Boton "Usar esta misma foto"
      // Por defecto si es otro boton como "Usar esta misma foto"
      return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
          </View>
      );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8, //deja 8 pixeles de espacio entre icono y texto
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });