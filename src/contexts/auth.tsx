import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import {api} from "../utils/api";
import { User } from "../utils/types/User";

const AuthContext = createContext({} as AuthContext);

type AuthContext = {
    signed: boolean,
    user: User | null,
    signin(email:string, password:string): Promise<void>,
    login(email:string, password:string): Promise<void>,
    logout(): void,
}

type Props = {
    children: React.ReactNode,
    navigation: any
}

export function AuthProvider({children, navigation}:Props){
    const [user, setUser] = useState<User | null>(null);

    async function isUserLogged(){
        const savedUser = await AsyncStorage.getItem("user");
        const savedToken = await AsyncStorage.getItem("token");

        if(savedUser && savedToken){
            setUser(JSON.parse(savedUser));
            api.defaults.headers.Authorization = `Bearer ${savedToken}`;
        }
    }

    useEffect(() => {
        isUserLogged();
    }, []);

    async function signin(email:string, password:string){
        const response = await api.post("/register", {
            email: email,
            password: password
        })

        navigation.navigate("Login");
    }

    async function login(email:string, password:string){
        const response = await api.post("/login", {email, password});

        setUser(response.data.user)
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        AsyncStorage.setItem("user", JSON.stringify(response.data.user));
        AsyncStorage.setItem("token", response.data.token);
        navigation.navigate("Profile");
    }

    function logout(){
        setUser(null);

        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{signed: Boolean(user), user, signin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}