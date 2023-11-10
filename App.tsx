import { StatusBar, StyleSheet, View } from "react-native";
import { FavoritesScreen } from "./src/components/FavoritesScreen/favoritesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <FavoritesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
  },
});
