import { StyleSheet, View } from "react-native";
import { LoginScreen } from "./src/components/LoginScreen/loginScreen";
import { ProfileScreen } from "./src/components/ProfileScreen/profileScreen";
import { EditProfileScreen } from "./src/components/EditProfileScreen/editProfile";
import { FavoritesScreen } from "./src/components/FavoritesScreen/favoritesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FavoritesScreen/>
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
