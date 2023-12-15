import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { api } from "../../utils/api";
import { useAuth } from "../../contexts/auth";
import { useForm, Controller, Field, FieldValues } from "react-hook-form";

// Fazer validação de informações
export function SignUpScreen({ navigation }: any) {
  const context = useAuth();

  function loginScreen() {
    navigation.navigate("Login");
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: FieldValues) {
    context.signin(data.name, data.email, data.password);
    loginScreen();
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

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.userInput}
                placeholder="Seu nome"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.notice}>O nome é necessário</Text>
          )}
          <Text style={styles.labelsInput}>Nome completo</Text>

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.emailInput}
                placeholder="Seu e-mail"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.notice}>O email é necessário</Text>
          )}
          <Text style={styles.labelsInput}>E-mail</Text>

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.passwordInput}
                placeholder="Sua senha"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.notice}>A senha é necessária</Text>
          )}
          <Text style={styles.labelsInput}>Senha</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSubmit(onSubmit)}
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
    height: 65,
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
  emailInput: {
    backgroundColor: "#D9D9D9",
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 65,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  passwordInput: {
    backgroundColor: "#D9D9D9",
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: "80%",
    height: 65,
    borderColor: "#ACACAC",
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#D9D9D9",
    marginTop: "20%",
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
