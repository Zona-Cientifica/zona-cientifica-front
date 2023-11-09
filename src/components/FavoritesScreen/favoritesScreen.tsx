import { ImageBackground, StyleSheet, View } from "react-native";

export function FavoritesScreen(){
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/backgrounds/color-morph1.png')}
        style={styles.backgroundImage}
      >

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
})