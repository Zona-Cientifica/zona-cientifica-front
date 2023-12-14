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
import { ScrollView } from "react-native-gesture-handler";
import { Controller, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { InputText } from "../TextInput/TextInput";
import { InputImage } from "../InputImage/InputImage";
import { api } from "../../utils/api";
import { zodSchema, ICreateEvent } from "../../utils/createEventSchema";
import styles from "./styles";

type Props = {
    navigation:any,
    route:any
}

type Params ={
    position: {
        latitude:number,
        longitude:number
    }
}

export default function Form({route, navigation}:Props) {
    const position = route.params?.position;
    console.log(position);
    const [imagePath, setImagePath] = useState<string[]>([]);

    const {control, handleSubmit, formState: {errors}} = useForm<ICreateEvent>({
        resolver: zodResolver(zodSchema)
    });

    async function handleCreateEvent(event:ICreateEvent){
        const formData = new FormData();

        formData.append("title", event.title);
        formData.append("description", event.description);
        formData.append("theme", event.theme);
        formData.append("picture", event.picture);
        formData.append("latitude", String(position.latitude));
        formData.append("longitude", String(position.longitude));

        const axiosConfig = {headers: {'content-type': 'multipart/form-data'}}

        // await api.post("/", formData, axiosConfig);
        navigation.navigate("AllEvents");
    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../assets/backgrounds/color-morph1.png")}
                        style={styles.backgroundImage}
                    >
                        <Controller
                            name="title"
                            control={control}
                            render={({field}) => (
                                <InputText
                                    placeholder="Título"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="picture"
                            control={control}
                            render={({field}) => (
                                <InputText
                                    placeholder="Escolha uma imagem"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="description"
                            control={control}
                            render={({field}) => (
                                <InputText
                                    placeholder="Descrição"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="theme"
                            control={control}
                            render={({field}) => (
                                <InputText
                                    placeholder="Escolha um tema"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            )}
                        />

                        <Controller
                            name="picture"
                            control={control}
                            render={({field}) => (
                                <InputImage
                                    setImagePath={setImagePath}
                                />
                            )}
                        />
                        
                        {
                            imagePath.map((imgUri) => (
                                <Image
                                    style={{width: 150, height: 150, alignSelf: "center"}}
                                    key={imgUri}
                                    source={ {uri: imgUri} }
                                />
                            ))
                        }


                        <Pressable style={styles.button} onPress={handleSubmit(handleCreateEvent)}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    );
}