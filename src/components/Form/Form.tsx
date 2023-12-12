import { View, Text, ImageBackground, Pressable, Alert, TextInput, KeyboardAvoidingView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { InputText } from "../TextInput/TextInput";
import { api } from "../../utils/api";

import { zodSchema, ICreateEvent } from "../../utils/createEventSchema";

import styles from "./styles";

export default function Form() {
    const {control, handleSubmit, formState: {errors}} = useForm<ICreateEvent>({
        resolver: zodResolver(zodSchema)
    });

    function handleCreateEvent(event:ICreateEvent){
        Alert.alert(
            'cadastro realizado com sucesso', 
            `(${event.title})`,
            [
              {text:'ok',}
            ]
          );
    }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/backgrounds/color-morph1.png")}
                    style={styles.backgroundImage}
                >
                    <KeyboardAvoidingView behavior="position" enabled style={styles.container}>
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

                        <Pressable onPress={handleSubmit(handleCreateEvent)}>
                            <Text>Enviar</Text>
                        </Pressable>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </>
    );
}