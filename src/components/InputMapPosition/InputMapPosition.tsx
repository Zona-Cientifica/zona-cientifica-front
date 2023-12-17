import { useEffect, useState } from "react";
import { Alert, Pressable, View, Text } from "react-native";
import * as Location from "expo-location";
import Map from "../Map/Map";
import styles from "./styles";
import { Marker, MapPressEvent } from "react-native-maps";
import { useAuth } from "../../contexts/auth";

type Props = {
  navigation: any;
};

type Position = {
  latitude: number;
  longitude: number;
};

export default function InputMapPosition({ navigation }: Props) {
  const { signed } = useAuth();

  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [chosedPosition, setChosedPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });

  function handleSelectPosition(event: MapPressEvent) {
    setChosedPosition(event.nativeEvent.coordinate);
    console.log(chosedPosition);
  }

  async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Precisamos da sua localização!");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    setCurrentPosition(location.coords);
  }

  function sendNextPage() {
    navigation.navigate("CreateEventPost", { position: chosedPosition });
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  function handleSendAllEvents(){
    navigation.navigate("AllEvents")
  }

  function handleSendLogin() {
    navigation.navigate("Login");
  }

  return (
    <>
      {signed ? (
        <View style={styles.container}>
          {currentPosition ? (
            <>
            <Text style={styles.header}>Escolha o local do evento</Text>
            <Map
              initialRegion={{
                latitude: currentPosition.latitude,
                longitude: currentPosition.longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
              showUserLocation={true}
              onPress={handleSelectPosition}
            >
              {chosedPosition.latitude !== 0 &&
                chosedPosition.longitude !== 0 && (
                  <Marker
                    coordinate={{
                      latitude: chosedPosition.latitude,
                      longitude: chosedPosition.longitude,
                    }}
                  />
                )}
            </Map>
            </>
          ) : (
            <Pressable onPress={handleSendAllEvents} style={styles.sendLogin}>
              <Text style={styles.msg}>Precisamos da sua localização!</Text>
              <Text style={styles.redirectText}>Clique aqui para reiniciar.</Text>
            </Pressable>
          )}

          {chosedPosition.latitude !== 0 && chosedPosition.longitude && (
            <Pressable onPress={sendNextPage} style={styles.button}>
              <Text  style={styles.continue}>Continuar Cadastro</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <Pressable onPress={handleSendLogin} style={styles.sendLogin}>
          <Text style={styles.msg}>Você deve estar logado para criar eventos!</Text>
          <Text style={styles.redirectText}>Clique aqui para fazer login</Text>
        </Pressable>
      )}
    </>
  );
}
