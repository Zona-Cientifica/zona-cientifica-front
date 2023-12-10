import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { api } from "../../utils/api";
import { useState } from "react";

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(event: React.SetStateAction<string>) {
    setEmail(event);
  }
  function handleChangePassword(event: React.SetStateAction<string>) {
    setPassword(event);
  }

  function signUpScreen() {
    navigation.navigate("SignUp");
  }

  function profile() {
    api
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        navigation.navigate("Profile", {
          userEmail: res.data.email,
          userPassword: password,
          userName: res.data.name,
          userContact: res.data.telefone,
          userSurname: res.data.apelido,
        });
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar animated translucent backgroundColor="transparent" />
      <ImageBackground
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
            onChangeText={handleChangeUsername}
          ></TextInput>
          <Text style={styles.labelsInput}>Email</Text>

          <TextInput
            style={styles.passwordInput}
            onChangeText={handleChangePassword}
          ></TextInput>
          <Text style={styles.labelsInput}>Senha</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={profile}
          >
            <Text style={styles.buttonInput}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.redirectText}
            activeOpacity={0.5}
            onPress={signUpScreen}
          >
            <Text style={styles.paragraph}>Não possui uma conta?</Text>
            <Text style={styles.paragraph}>Clique aqui para cadastrar-se!</Text>
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
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: "25%",
    resizeMode: "center",
  },
  userInput: {
    backgroundColor: "#D9D9D9",
    marginTop: "15%",
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
    marginTop: -74,
    marginLeft: 55,
  },
  passwordInput: {
    backgroundColor: "#D9D9D9",
    marginTop: "20%",
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
    marginTop: "24%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "32%",
    height: "8%",
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
    marginTop: "10%",
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
