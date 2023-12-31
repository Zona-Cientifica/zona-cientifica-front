import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { api, pathImage } from "../../utils/api";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import { ScrollView } from "react-native-gesture-handler";

export function ProfileScreen({ route, navigation }: any) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState(0);
  const [picture, setPicture] = useState();
  
  const context = useAuth();
  const email = context.user?.email;

  async function profile(email:string | undefined) {
    await api
      .post("/getUser", { email: email })
      .then((res) => {
        setName(res.data.name);
        setUserName(res.data.userName);
        setPhone(res.data.phone);
        setPicture(res.data.picture)
      })
      .catch((error) => {
        console.log("Erro pegar usuário", error);
      });
  }
  
  useFocusEffect(() => {
    profile(email)
  })

  function editProfile() {
    navigation.navigate("EditProfile", {
      userEmail: context.user?.email,
    });
  }

  function favorites() {
    navigation.navigate("Favorites", {
      userEmail: context.user?.email,
      userPassword: context.user?.password,
    });
  }
  
  function participating() {
    navigation.navigate("Participating", {
      userEmail: context.user?.email,
      userPassword: context.user?.password,
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/Rectangle1.png")}
        style={styles.backgroundImage}
      >
        <ScrollView>
        <View style={styles.boxProfile}>
          <Image
            style={styles.picture}
            source={picture ? {uri: pathImage + picture} : require("../../assets/backgrounds/Ellipse1.png")}
          />
          <Text style={styles.fullName}>{name}</Text>
          <Text style={styles.firstName}>{userName}</Text>
        </View>

        <TouchableOpacity style={styles.buttonEdit} onPress={editProfile}>
          <Image
            style={styles.edit}
            source={require("../../assets/backgrounds/edit.png")}
          />
        </TouchableOpacity>

        <View style={styles.boxContact}>
          <Text style={styles.contact}>Contato</Text>
          <Text style={styles.number}>{phone}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <TouchableOpacity style={styles.buttonFavorite} onPress={favorites}>
          <Text style={styles.favorite}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonParticipating}
          onPress={participating}
        >
          <Text style={styles.participating}>Participando</Text>
        </TouchableOpacity>
        </ScrollView>
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
    marginTop: "15%",
    alignItems: "center",
  },
  picture: {
    width: 171,
    height: 171,
    marginBottom: "2%",
    borderRadius: 100,
  },
  fullName: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
  },
  firstName: {
    color: "#DBBCBC",
    fontSize: 22,
    fontWeight: "400",
  },
  boxContact: {
    marginTop: "-5%",
    marginLeft: "10%",
  },
  contact: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
  },
  number: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  email: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  buttonFavorite: {
    backgroundColor: "rgba(217, 217, 217, 0.20);",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    padding: "1%",
    marginTop: "20%",
    width: 150,
    marginLeft: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  favorite: {
    color: "#003465",
    fontSize: 32,
    fontWeight: "700",
  },
  participating: {
    color: "#003465",
    fontSize: 32,
    fontWeight: "700",
  },
  buttonParticipating: {
    backgroundColor: "rgba(217, 217, 217, 0.20);",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    padding: "1%",
    marginTop: "3%",
    width: 200,
    marginLeft: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    width: 30,
    height: 30,
  },
  buttonEdit: {
    backgroundColor: "rgba(217, 217, 217, 0.20)",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "85%",
    marginTop: "-2%",
  },
});
