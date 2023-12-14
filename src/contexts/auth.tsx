import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { User } from "../utils/types/User";

const AuthContext = createContext({} as AuthContext);

type AuthContext = {
  signed: boolean;
  user: User | null;
  signin(name: string, email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  logout(): void;
};

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  async function isUserLogged() {
    const savedUser = await AsyncStorage.getItem("user");
    const savedToken = await AsyncStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      api.defaults.headers.Authorization = `Bearer ${savedToken}`;
    }
  }

  useEffect(() => {
    isUserLogged();
  }, []);

  async function signin(name: string, email: string, password: string) {
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });
  }

  async function login(email: string, password: string) {
    const response = await api.post("/login", { email, password });
    setUser(response.data);
    //api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await AsyncStorage.setItem("user", JSON.stringify(response.data));
    //await AsyncStorage.setItem("token", response.data.token);
  }

  async function logout() {
    setUser(null);

    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
