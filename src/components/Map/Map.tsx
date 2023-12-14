import { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    Pressable,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Image
} from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

export default function Map({...rest}) {
    return (
        <>
            <View style={styles.container}>
                <MapView style={styles.map} {...rest} />
            </View>
        </>
    );
}