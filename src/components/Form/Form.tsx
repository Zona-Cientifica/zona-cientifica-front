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

import Dropdown from "react-native-input-select";
import { InputText } from "../TextInput/TextInput";
import { InputImage } from "../InputImage/InputImage";

import { api } from "../../utils/api";
import { zodSchema, ICreateEvent } from "../../utils/createEventSchema";
import { useAuth } from "../../contexts/auth";

import styles from "./styles";
import { DropdownProps } from "react-native-input-select/lib/typescript/types/index.types";
import {categories} from "../../utils/mock/mockCategories";

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
        formData.append("location", data.location);
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
        setImagePath([]);

        navigation.navigate("AllEvents");
    }

    return (
        <>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../assets/backgrounds/color-morph1.png")}
                        style={styles.backgroundImage}
                    >
                        <ScrollView contentContainerStyle={styles.scrollView}>
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
                            <Text style={styles.header}>Categoria</Text>
                            <Controller
                                name="theme"
                                control={control}
                                render={({field}) => (
                                    <Dropdown
                                        placeholder="Selecione uma categoria"
                                        options={categories.map((category) => (
                                            {label: category.name, value: category.name}
                                        ))}
                                        dropdownStyle={{
                                            width: "80%",
                                            height: 79,
                                            alignSelf: "center",
                                            marginBottom: 0
                                        }}
                                        selectedValue={field.value}
                                        onValueChange={(value: DropdownProps) => field.onChange(value)}
                                        primaryColor={"green"}
                                    >

                                    </Dropdown>
                                )}
                            />
                            {errors.theme && <Text style={styles.error}>{errors.theme.message}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.header}>Data</Text>
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
                            <Text style={styles.header}>Localização</Text>
                            <Controller
                                name="location"
                                control={control}
                                render={({field}) => (
                                    <InputText
                                        placeholder="Localização"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                    />
                                )}
                            />
                            {errors.location && <Text style={styles.error}>{errors.location.message}</Text>}
                        </View>
                        
                        <View style={styles.inputContainer}>
                            <Text style={styles.header}>Imagem:</Text>
                            <InputImage
                                setImagePath={setImagePath}
                            >
                            {
                                imagePath.length == 0 && (
                                    <Image
                                        style={{width: "90%", height: 190, borderRadius: 10, alignSelf: "center"}}
                                        source={require("../../assets/backgrounds/missingimage.png")}
                                    />
                                )
                            }
                            
                            {
                                imagePath.length > 0 && imagePath.map((imgUri) => (
                                    <Image
                                        style={{width: "90%", height: 190, borderRadius: 10, alignSelf: "center"}}
                                        key={imgUri}
                                        source={ {uri: imgUri} }
                                    />
                                ))
                            }
                            </InputImage>
                        </View>
                        
                        <Pressable style={styles.button} onPress={handleSubmit(handleCreateEvent)}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </Pressable>
                        </ScrollView>
                    </ImageBackground>
                </View>
        </>
    );
}