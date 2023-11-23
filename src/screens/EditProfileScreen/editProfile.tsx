import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000",
});

export function EditProfileScreen({ route }: any) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const email = route.params?.userEmail;
  const password = route.params?.userPassword;

  function edit(){
    api
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setName(res.data.name);
        setSurname(res.data.apelido);
        setPhone(res.data.telefone);
      });
  }
  edit();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/Rectangle1.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.boxProfile}>
          <Image
            style={styles.picture}
            source={require("../../assets/backgrounds/Ellipse1.png")}
          />
          <TextInput
            style={styles.inputFullName}
            value={name}
            placeholderTextColor={"#000"}
          />
          <TextInput
            style={styles.inputName}
            value={surname}
            placeholderTextColor={"#000"}
          />
        </View>

        <Text style={styles.contact}>Contato</Text>

        <View style={styles.boxContact}>
          <TextInput
            style={styles.inputNumber}
            value={phone}
            placeholderTextColor={"#000"}
          />
          <TextInput
            style={styles.inputEmail}
            value={email}
            placeholderTextColor={"#000"}
          />
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonSave}>
            <Image
              source={require("../../assets/backgrounds/check-circle.png")}
              style={styles.imgSave}
            />
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
  boxProfile: {
    marginTop: "20%",
    alignItems: "center",
  },
  picture: {
    width: 171,
    height: 171,
    marginBottom: "5%",
  },
  inputFullName: {
    backgroundColor: "#D9D9D9",
    color: "#000",
    fontSize: 32,
    fontWeight: "700",
    paddingLeft: "1%",
    paddingRight: "1%",
    width: "70%",
    marginBottom: "3%",
    textAlign: "center",
  },
  inputName: {
    backgroundColor: "#D9D9D9",
    fontSize: 22,
    fontWeight: "400",
    padding: "2%",
    width: "28%",
    textAlign: "center",
  },
  contact: {
    color: "#000",
    fontSize: 23,
    fontWeight: "700",
    marginTop: "10%",
    marginLeft: "10%",
  },
  boxContact: {
    marginTop: "2%",
    alignItems: "center",
  },
  inputNumber: {
    backgroundColor: "#D9D9D9",
    fontSize: 20,
    fontWeight: "400",
    padding: "1%",
    marginTop: "2%",
    marginBottom: "3%",
    width: "35%",
    textAlign: "center",
  },
  inputEmail: {
    backgroundColor: "#D9D9D9",
    fontSize: 20,
    fontWeight: "400",
    padding: "1%",
    width: "81%",
    textAlign: "center",
  },
  boxButton: {
    alignItems: "center",
    marginTop: "45%",
  },
  buttonSave: {
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    width: "28%",
    padding: "1%",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  imgSave: {
    width: 100,
    height: 30,
  },
});
