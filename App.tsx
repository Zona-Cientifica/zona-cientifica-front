import { StatusBar, StyleSheet, View } from "react-native";
import { FavoritesScreen } from "./src/screens/FavoritesScreen/favoritesScreen";
import { EditProfileScreen } from "./src/screens/EditProfileScreen/editProfile";
import { LoginScreen } from "./src/screens/LoginScreen/loginScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen/signUpSreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/profileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <ProfileScreen />
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
