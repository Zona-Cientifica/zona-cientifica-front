import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar animated translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../../assets/backgrounds/Frame1.png")}
        style={styles.backgroundImage}
      >
        <View>
          <TextInput style={styles.userInput}></TextInput>
          <Text style={styles.labelsInput}>Usuário</Text>

          <TextInput style={styles.passwordInput}></TextInput>
          <Text style={styles.labelsInput}>Senha</Text>

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonInput}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.redirectText} activeOpacity={0.5}>
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
  userInput: {
    backgroundColor: "#D9D9D9",
    marginTop: 159,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 79,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  labelsInput: {
    color: "#000",
    fontSize: 18,
    fontWeight: "900",
    marginTop: -75,
    marginLeft: 48,
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#D9D9D9",
    marginTop: 87,
    marginLeft: "auto",
    marginRight: "auto",
    width: "35%",
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
  },
});
