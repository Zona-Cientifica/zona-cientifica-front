import { useEffect, useState } from "react";
import {
    Alert,
    Pressable,
    View,
    Text
} from "react-native";
import * as Location from "expo-location";
import Map from "../Map/Map";
import styles from "./styles";
import { Marker, MapPressEvent } from "react-native-maps";

type Props = {
    navigation: any
}

type Position = {
    latitude:number,
    longitude:number
}

export default function InputMapPosition({navigation}:Props) {
    const [currentPosition, setCurrentPosition] = useState<Position>({latitude: 0, longitude: 0});
    const [chosedPosition, setChosedPosition] = useState<Position>({latitude: 0, longitude: 0});

    function handleSelectPosition(event:MapPressEvent){
        setChosedPosition(event.nativeEvent.coordinate);
        console.log(chosedPosition)
    }

    async function getCurrentLocation(){
        let {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== "granted"){
            Alert.alert("Precisamos da sua localização!");
            return
        }

        let location = await Location.getCurrentPositionAsync();
        setCurrentPosition(location.coords);
    }

    function sendNextPage(){
        navigation.navigate("CreateEventPost", {position: chosedPosition}); 
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Map
                    initialRegion={{
                        latitude: currentPosition.latitude,
                        longitude: currentPosition.longitude,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008
                    }}
                    showUserLocation
                    onPress={handleSelectPosition}
                >
                    {chosedPosition.latitude !== 0 && chosedPosition.longitude !== 0 && (
                        <Marker
                            coordinate ={{
                            latitude: chosedPosition.latitude,
                            longitude: chosedPosition.longitude,
                            }}
                        />
                    )}
                </Map>

                {chosedPosition.latitude !== 0 && chosedPosition.longitude && (
                    <Pressable onPress={sendNextPage}>
                        <Text>Próxima página</Text>
                    </Pressable>
                )}
            </View>
        </>
    );
}