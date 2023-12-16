import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { CardFavorite } from "../../components/CardFavorite/cardFavorite";
import { api } from "../../utils/api";
import {  useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useFocusEffect } from "@react-navigation/native";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
};


export function FavoritesScreen({ route }: any) {
  const [favorites, setFavorites] = useState<[]>([]);
  const context = useAuth();

  async function findFavorites() {
    try {
      api
        .post("/getFavoriteList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.favoriteList;
          setFavorites(list);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  useFocusEffect(() => {
    findFavorites();
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/color-morph1.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.boxCards}>
          <Text style={styles.textFavorite}>Meus favoritos</Text>
          <FlatList
            data={favorites}
            renderItem={({ item }) => <CardFavorite event={item} />}
          />
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
  boxCards: {
    marginTop: "8%",
    alignItems: "center",
    marginBottom: "15%",
  },
  textFavorite: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
  },
});
