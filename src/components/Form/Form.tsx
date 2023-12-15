import { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    Pressable,
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
import { useAuth } from "../../contexts/auth";

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
    const {user} = useAuth();
    const position = route.params?.position;

    const [imagePath, setImagePath] = useState<string[]>([]);

    const {control, handleSubmit, formState: {errors}, reset} = useForm<ICreateEvent>({
        resolver: zodResolver(zodSchema),
    });

    async function handleCreateEvent(data:ICreateEvent){
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("theme", data.theme);
        formData.append("date", data.date);
        formData.append("latitude", String(position.latitude));
        formData.append("longitude", String(position.longitude));
        {user && formData.append("userId", user._id)}
        imagePath.map((uri, index) =>{
            formData.append("picture", {
                name: `image-${uri}.jpeg`,
                type: "image/jpeg",
                uri: uri
            } as any)
        })

        const response = await api.post("/event", formData, {headers: {"Content-Type": "multipart/form-data"}});

        reset({title: "", description: "", theme: "", date: ""})

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
                        <View style={styles.inputContainer}>
                            <Text style={styles.header}>Título</Text>
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
                            {errors.title && <Text style={styles.error}>{errors.title.message}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                        <Text style={styles.header}>Descrição</Text>
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
                        {errors.description && <Text style={styles.error}>{errors.description.message}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                        <Text style={styles.header}>Tema</Text>
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
                        {errors.theme && <Text style={styles.error}>{errors.theme.message}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                        <Text style={styles.header}>Data(DD/MM/AAAA)</Text>
                        <Controller
                            name="date"
                            control={control}
                            render={({field}) => (
                                <InputText
                                    placeholder="Escolha uma data"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            )}
                        />
                        {errors.date && <Text style={styles.error}>{errors.date.message}</Text>}
                        </View>
                        
                        <View style={styles.inputContainer}>
                        <Text style={styles.header}>Imagem:</Text>
                        <InputImage
                            setImagePath={setImagePath}
                        />
                        </View>
                        
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