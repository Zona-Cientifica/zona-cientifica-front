import { View, Text, ImageBackground, Pressable, Alert } from "react-native";
import Form from "../../components/Form/Form";

import styles from "./styles";

export default function CreateEventScreen({route, navigation}:any) {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/backgrounds/color-morph1.png")}
                    style={styles.backgroundImage}
                >
                    <Form route={route} navigation={navigation}/>
                </ImageBackground>
            </View>
        </>
    );
}