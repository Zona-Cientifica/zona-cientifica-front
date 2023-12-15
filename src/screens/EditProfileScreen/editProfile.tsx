import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useForm, Controller, Field, FieldValues } from "react-hook-form";

export function EditProfileScreen({ route, navigation }: any) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const email = route.params?.userEmail;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function getUser(){
    api
      .post("/getUser", {
        email: email
      })
      .then((res) => {
        setName(res.data.name);
        setSurname(res.data.apelido);
        setPhone(res.data.telefone);
      });
  }

  async function saveUser(data: FieldValues){
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("apelido", data.surname);
    formData.append("telefone", data.phone);
    formData.append("email", email);

    const response = await api.post("/editperfil", formData, {headers: {"Content-Type": "multipart/form-data"}})

    navigation.navigate("Profile")
  }

  useFocusEffect(() => {
    getUser()
  })

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
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value = name } }) => (
              <TextInput
                style={styles.inputFullName}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={"#000"}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.notice}>O nome é necessário</Text>
          )}


          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value = surname } }) => (
              <TextInput
                style={styles.inputName}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={"#000"}
              />
            )}
            name="surname"
          />
          {errors.surname && (
            <Text style={styles.notice}>O apelido é necessário</Text>
          )}
        </View>

        <Text style={styles.contact}>Contato</Text>

        <View style={styles.boxContact}>
          <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value = phone } }) => (
                <TextInput
                  style={styles.inputNumber}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor={"#000"}
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <Text style={styles.notice}>O telefone é necessário</Text>
            )}
            
            <Text style={styles.inputEmail}>{email}</Text>
          </View>

        <View style={styles.boxButton}>
          <Pressable style={styles.buttonSave} onPress={handleSubmit(saveUser)}>
            <Image
              source={require("../../assets/backgrounds/check-circle.png")}
              style={styles.imgSave}
            />
          </Pressable>
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
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
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
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    fontSize: 22,
    fontWeight: "500",
    color: "#000",
    paddingLeft: "2%",
    paddingRight: "2%",
    width: "60%",
    height: "10%",
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
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    paddingLeft: "2%",
    paddingRight: "2%",
    marginTop: "2%",
    marginBottom: "3%",
    width: "50%",
    textAlign: "center",
  },
  inputEmail: {
    // backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%",
    width: "70%",
    textAlign: "center",
  },
  boxButton: {
    alignItems: "center",
    marginTop: "10%",
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
  notice: {
    color: "red",
    marginLeft: "13%",
    marginBottom: "-4.7%",
  },
});
