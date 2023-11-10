import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Card } from "../Card/card";

export function FavoritesScreen(){
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/backgrounds/color-morph1.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.boxCards}>
          <Text style={styles.textFavorite}>Meus favoritos</Text>
          <Card />
        </View>
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
  boxCards: {
    marginTop: '8%',
    alignItems: 'center'
  },
  textFavorite: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700'
  }
})