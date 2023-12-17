import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { api, pathImage } from "../../utils/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useIsFocused } from "@react-navigation/native";

interface Event {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
}
type Favorite = {
  id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
};
interface Props {
  event: Event;
  navigation: any;
}
export function Card({ navigation, event }: Props) {
  const context = useAuth();
  const [favorite, setFavorite] = useState(false);
  const isFocused = useIsFocused();

  async function findFavorites() {
    try {
      api
        .post("/getFavoriteList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.favoriteList;
          list.map((favorite: Favorite) => {
            console.log(event);
            if (favorite.id === event._id) {
              setFavorite(true);
            }
          });
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function addFavorite() {
    try {
      api.post("/addFavorite", {
        email: context.user?.email,
        id: event._id,
        title: event.title,
        picture: event.picture,
        description: event.description,
        date: event.date,
        location: event.location,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function deleteFavorite() {
    try {
      api.post("/deleteFavorite", {
        email: context.user?.email,
        id: event._id,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function changeFavorite() {
    if (favorite === true) {
      deleteFavorite();
      setFavorite(false);
    } else {
      addFavorite();
      setFavorite(true);
    }
  }

  function eventDetail() {
    navigation.navigate("EventDetail", {
      eventId: event._id,
      eventPicture: event.picture,
      eventTitle: event.title,
      eventDescription: event.description,
      eventDate: event.date,
      eventLocation: event.location,
    });
  }

  useEffect(() => {
    if (isFocused) {
      setFavorite(false);
      findFavorites();
    }
  }, [isFocused]);

  return (
    <Pressable onPress={eventDetail}>
      <View style={styles.card}>
        <Image
          style={styles.imgCard}
          source={{ uri: pathImage + event.picture }}
        />
        <View style={styles.boxDescription}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.date}>{event.date}</Text>
        </View>

        {favorite === true ? (
          <Pressable style={styles.buttonHeart} onPress={changeFavorite}>
            <Entypo name="heart" size={40} color="#FF4141" />
          </Pressable>
        ) : (
          <Pressable style={styles.buttonHeart} onPress={changeFavorite}>
            <Entypo name="heart-outlined" size={40} color="#FFF" />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D9D9D9",
    width: 340,
    height: 250,
    borderRadius: 11,
    marginTop: "5%",
  },
  imgCard: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  description: {
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  date: {
    color: "#000",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    marginTop: "3%",
  },
  boxDescription: {
    flex: 1,
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonHeart: {
    alignItems: "flex-end",
    marginRight: "3%",
    marginBottom: "3%",
  },
});
