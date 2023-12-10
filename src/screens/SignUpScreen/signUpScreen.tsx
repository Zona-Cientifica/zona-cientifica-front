import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { api } from "../../utils/api";

// Fazer validação de informações
export function SignUpScreen({ navigation }: any) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUser(event: React.SetStateAction<string>) {
    setUser(event);
  }
  function handleChangeEmail(event: React.SetStateAction<string>) {
    setEmail(event);
  }
  function handleChangePassword(event: React.SetStateAction<string>) {
    setPassword(event);
  }

  function loginScreen() {
    navigation.navigate("Login");
  }

  async function signIn() {
    try {
      api
        .post("/register", {
          name: user,
          email: email,
          password: password,
        })
        .then(() => {
          console.log("User Registered.");
          navigation.navigate("Profile", {userEmail: email, userPassword: password});
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar animated translucent backgroundColor="transparent" />
      <ImageBackground
        blurRadius={5}
        source={require("../../assets/backgrounds/Frame1.png")}
        style={styles.backgroundImage}
      >
          <View>
            <Image
              source={require("../../assets/backgrounds/Logo.png")}
              style={styles.logo}
            ></Image>
            <TextInput
              style={styles.userInput}
              onChangeText={handleChangeUser}
            ></TextInput>
            <Text style={styles.labelsInput}>Usuário</Text>

            <TextInput
              style={styles.emailInput}
              onChangeText={handleChangeEmail}
            ></TextInput>
            <Text style={styles.labelsInput}>E-mail</Text>

            <TextInput
              style={styles.passwordInput}
              onChangeText={handleChangePassword}
            ></TextInput>
            <Text style={styles.labelsInput}>Senha</Text>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={signIn}
            >
              <Text style={styles.buttonInput}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.redirectText}
              activeOpacity={0.5}
              onPress={loginScreen}
            >
              <Text style={styles.paragraph}>Já possui uma conta?</Text>
              <Text style={styles.paragraph}>Clique aqui para entrar!</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  );
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
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: "25%",
    resizeMode: "center",
  },
  userInput: {
    backgroundColor: "#D9D9D9",
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 79,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  labelsInput: {
    color: "#000",
    fontSize: 18,
    fontWeight: "900",
    marginTop: -75,
    marginLeft: 54,
  },
  emailInput: {
    backgroundColor: "#D9D9D9",
    marginTop: 81,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 79,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  passwordInput: {
    backgroundColor: "#D9D9D9",
    marginTop: 81,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 79,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#D9D9D9",
    marginTop: 87,
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    height: 59,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ACACAC",
    borderWidth: 1,
  },
  buttonInput: {
    color: "#000",
    fontWeight: "900",
    fontSize: 24,
  },
  redirectText: {
    width: 230,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
    textShadowColor: "#06F",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    lineHeight: 19,
  },
});
function setState(arg0: { value: any }) {
  throw new Error("Function not implemented.");
}
