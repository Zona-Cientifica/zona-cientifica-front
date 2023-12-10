import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from "./styles";
import AllEventsScreen from "../../screens/AllEventsScreen/AllEventsScreen";
import { FavoritesScreen } from "../../screens/FavoritesScreen/favoritesScreen";
import { ParticipatingScreen } from "../../screens/ParticipatingScreen/participatingScreen";
import { ProfileScreen } from "../../screens/ProfileScreen/profileScreen";
import { SignUpScreen } from "../../screens/SignUpScreen/signUpScreen";
import { LoginScreen } from "../../screens/LoginScreen/loginScreen";
import { EditProfileScreen } from "../../screens/EditProfileScreen/editProfile";
import EventDetailScreen from "../../screens/EventDetailScreen/EventDetailScreen";

const Drawer = createDrawerNavigator();

export default function Menu(){
    return (
        <>
            <Drawer.Navigator 
                initialRouteName="Login"
            >
                <Drawer.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        drawerItemStyle: {
                            display: "none"
                        },
                        title: "Entrar",
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        drawerItemStyle: {
                            display: "none"
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
                        headerShown: false,
                    }}
                />

                <Drawer.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{
                        drawerItemStyle: {
                            display: "none"
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
                            display: "none"
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
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="Participating"
                    component={ParticipatingScreen}
                    options={{
                        title: "Participando",
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: "Perfil",
                        headerShown: false,
                    }}
                />
            </Drawer.Navigator>
        </>
    )
}