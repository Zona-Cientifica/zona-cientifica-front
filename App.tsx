import { StyleSheet } from "react-native";
import { FavoritesScreen } from "./src/screens/FavoritesScreen/favoritesScreen";
import { EditProfileScreen } from "./src/screens/EditProfileScreen/editProfile";
import { LoginScreen } from "./src/screens/LoginScreen/loginScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen/signUpSreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/profileScreen";
import EventDetailScreen from "./src/screens/EventDetailScreen/EventDetailScreen";
import AllEventsScreen from "./src/screens/AllEventsScreen/AllEventsScreen";
import { ParticipatingScreen } from "./src/screens/ParticipatingScreen/participatingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllEvents"
          component={AllEventsScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Participating"
          component={ParticipatingScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
  },
});
