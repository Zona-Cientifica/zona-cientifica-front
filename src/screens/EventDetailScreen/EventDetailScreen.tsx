import { View, Text, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "./style";

import { api } from "../../utils/api";

const img = 'https://s3-alpha-sig.figma.com/img/a165/5663/798343d67745f88113352206ab3a1443?Expires=1701043200&Signature=Ng5738hwfD~ukuB0JCpKsT~e6TjnhqFaY9Ja2kVnfPmUMtQz80mu1d4hZ~vd2iVdiNhL5VnwmXf9byKzhnQd2YnWuurEUwvijqoiJYaJtpWYfFdsnCpq-B4BS8VjMfC2YYu~DQingzWxm2PbOw-f1sDFh61wT7CRZVpJOHN3XNCUwBVQcCVKx2-0LPs2Edmkdmj5McU0oNvo-KMU~aiPpF5vAJptSDjAw1hFE80jp34a-7yK9Wx4cWAI1FF9lJNdyb6e73fSRwoGm6gNkv8xOoYifEibPPNVB7heR05uKI7NlldPgPeLb-Ff0GBt0DE6M2fSaUtER7iMP~RsAaOVgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

export default function EventDetailScreen(){
    return (
        <>
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../../assets/backgrounds/color-morph1.png')}
                    style={styles.backgroundImage}
                >
                    <Text style={styles.title}>Nome do Evento</Text>

                    <Image
                        source={require("../../assets/backgrounds/tecnologia.jpg")}
                        style={styles.eventImage}
                    />
                    
                    <View style={styles.subContainer}>
                        <AntDesign name="calendar" size={30} color="lightblue" />
                        <Text style={styles.info}>04 a 07 de Outubro de 2023</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <MaterialCommunityIcons name="map-marker-radius" size={30} color="red" />
                        <Text style={styles.info}>IFPB Campus Cajazeiras</Text>
                    </View>

                    <Text style={styles.subtitle}>Descrição</Text>

                    <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eligendi, dolorum ex veritatis non consequatur commodi magni. Illo, voluptates. Harum facere laudantium omnis ratione? Sapiente dolorum distinctio incidunt illum modi.
                    </Text>
                </ImageBackground>
            </View>
        </>
    )
}