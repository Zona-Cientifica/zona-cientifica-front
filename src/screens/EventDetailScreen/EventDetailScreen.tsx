import { View, Text, ImageBackground, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

import { api, pathImage } from "../../utils/api";

export default function EventDetailScreen({ route }: any) {
  const eventPicture = route.params?.eventPicture;
  const eventTitle = route.params?.eventTitle;
  const eventDescription = route.params?.eventDescription;
  const eventDate = route.params?.eventDate;
  const eventLocation = route.params?.eventLocation;

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

          <View style={styles.boxDescription}>
            <Text style={styles.subtitle}>Descrição</Text>

            <Text style={styles.content}>{eventDescription}</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
