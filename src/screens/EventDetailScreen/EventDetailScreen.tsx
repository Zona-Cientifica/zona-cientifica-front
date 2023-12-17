import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

import { api, pathImage } from "../../utils/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useIsFocused } from "@react-navigation/native";

export default function EventDetailScreen({ route }: any) {
  const eventId = route.params?.eventId;
  const eventPicture = route.params?.eventPicture;
  const eventTitle = route.params?.eventTitle;
  const eventDescription = route.params?.eventDescription;
  const eventDate = route.params?.eventDate;
  const eventLocation = route.params?.eventLocation;
  const [participating, setParticipating] = useState(false);
  const context = useAuth();
  const isFocused = useIsFocused();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          list.map((participating) => {
            if (participating.id === eventId) {
              setParticipating(true);
            }
          });
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function addParticipating() {
    try {
      api.post("/addParticipating", {
        email: context.user?.email,
        id: eventId,
        title: eventTitle,
        picture: eventPicture,
        description: eventDescription,
        date: eventDate,
        location: eventLocation,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function deleteParticipating() {
    try {
      api.post("/deleteParticipating", {
        email: context.user?.email,
        id: eventId,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function changeParticipating() {
    if (participating === true) {
      deleteParticipating();
      setParticipating(false);
    } else {
      addParticipating();
      setParticipating(true);
    }
  }

  useEffect(() => {
    if (isFocused) {
      setParticipating(false);
      findParticipating();
    }
  }, [isFocused]);
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/backgrounds/color-morph1.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.title}>{eventTitle}</Text>

          <Image
            source={{ uri: pathImage + eventPicture }}
            style={styles.eventImage}
          />

          <View style={styles.subContainer}>
            <AntDesign name="calendar" size={30} color="lightblue" />
            <Text style={styles.info}>{eventDate}</Text>
          </View>

          <View style={styles.subContainer}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={30}
              color="red"
            />
            <Text style={styles.info}>{eventLocation}</Text>
          </View>

          {participating === true ? (
            <TouchableOpacity
              onPress={changeParticipating}
              style={{
                borderColor: "#DFF6FF",
                borderWidth: 2,
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 18,
                paddingRight: 18,
                backgroundColor: "#065F89",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
                Cancelar Participação
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={changeParticipating}
              style={{
                borderColor: "#DFF6FF",
                borderWidth: 2,
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 18,
                paddingRight: 18,
                backgroundColor: "#D1E0DB",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Participar
              </Text>
            </TouchableOpacity>
          )}

          <View style={styles.boxDescription}>
            <Text style={styles.subtitle}>Descrição</Text>

            <Text style={styles.content}>{eventDescription}</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
