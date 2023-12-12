import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import AllEventsScreen from "../../screens/AllEventsScreen/AllEventsScreen";
import { FavoritesScreen } from "../../screens/FavoritesScreen/favoritesScreen";
import { ParticipatingScreen } from "../../screens/ParticipatingScreen/participatingScreen";
import { ProfileScreen } from "../../screens/ProfileScreen/profileScreen";
import { SignUpScreen } from "../../screens/SignUpScreen/signUpScreen";
import { LoginScreen } from "../../screens/LoginScreen/loginScreen";
import { EditProfileScreen } from "../../screens/EditProfileScreen/editProfile";
import EventDetailScreen from "../../screens/EventDetailScreen/EventDetailScreen";
import CreateEventScreen from "../../screens/CreateEventScreen/CreateEventScreen";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerActiveTintColor: "#FFF",
          drawerInactiveTintColor: "#FFF",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            title: "Entrar",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            title: "Criar Conta",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="AllEvents"
          component={AllEventsScreen}
          options={{
            title: "Eventos",
            drawerLabelStyle: {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
            },
            headerShown: false,
            drawerIcon: () => (
              <Image
                source={require("../../assets/backgrounds/calendar.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 10,
                  marginRight: -10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            title: "EditarPerfil",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            title: "Detalhes do evento",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favoritos",
            drawerLabelStyle: {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
            },
            headerShown: false,
            drawerIcon: () => (
              <Image
                source={require("../../assets/backgrounds/heart.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 10,
                  marginRight: -10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Participating"
          component={ParticipatingScreen}
          options={{
            title: "Participando",
            drawerLabelStyle: {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
            },
            headerShown: false,
            drawerIcon: () => (
              <Image
                source={require("../../assets/backgrounds/award.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 10,
                  marginRight: -10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Perfil",
            drawerLabelStyle: {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 32,
              marginTop: 114,
            },
            headerShown: false,
            drawerIcon: () => (
              <Image
                source={require("../../assets/backgrounds/home.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 10,
                  marginRight: -10,
                  marginTop: 114,
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
