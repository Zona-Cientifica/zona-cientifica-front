import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { api } from "../../utils/api";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Informe o e-mail")
      .matches(
        /^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i,
        "Formato de e-mail inválido"
      )
      .nonNullable(),
    password: yup
      .string()
      .required("Informe a senha")
      .nonNullable()
      .min(6, "A senha tem no mínimo 6 caracteres"),
  })
  .required();

export function LoginScreen({ navigation }: any) {
  const context = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: FieldValues) {
    context.login(data.email, data.password);
    if (context.user) {
      profile();
    } else {
      Alert.alert("Erro!", "Usuário não encontrado ou dados incorretos.");
    }
  }

  function signUpScreen() {
    navigation.navigate("SignUp");
  }

  function profile() {
    navigation.navigate("Profile");
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

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.userInput}
                placeholder="Seu e-mail"
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.notice}>{errors.email.message}</Text>
          )}
          <Text style={styles.labelsInput}>Email</Text>

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.passwordInput}
                placeholder="Sua senha"
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                secureTextEntry
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.notice}>{errors.password.message}</Text>
          )}
          <Text style={styles.labelsInput}>Senha</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSubmit(onSubmit)}
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
    height: 68,
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
    marginTop: -65,
    marginLeft: "13%",
  },
  notice: {
    color: "red",
    marginLeft: "13%",
    marginBottom: "-4.7%",
  },
  passwordInput: {
    backgroundColor: "#D9D9D9",
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 68,
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
