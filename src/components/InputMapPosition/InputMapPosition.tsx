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

  function handleSendPage() {
    navigation.navigate("Login");
  }

  return (
    <>
      {signed ? (
        <View style={styles.container}>
          {currentPosition ? (
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
          ) : (
            <Text>mapa sumiu</Text>
          )}

          {chosedPosition.latitude !== 0 && chosedPosition.longitude && (
            <Pressable onPress={sendNextPage}>
              <Text>Próxima página</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <Pressable onPress={handleSendPage} style={styles.sendLogin}>
          <Text>Clica aqui para fazer login</Text>
        </Pressable>
      )}
    </>
  );
}
