import { Dispatch, SetStateAction } from "react";
import { Pressable } from "react-native";
import { TextInputProps } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import styles from "./styles";
import { useState } from "react";

type Props = {
    setImagePath: Dispatch<SetStateAction<string[]>>;
    children: React.ReactNode
}

export function InputImage({setImagePath, children, ...rest}:Props){
    const [images, setImages] = useState<string[]>([]);

    async function handlePickImage(){
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status !== "granted"){
            alert("Precisamos de acesso a galeria para selecionar foto");
            return;
        }
        
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            allowsMultipleSelection: false,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        })

        if(!result.canceled){
            setImagePath([
                ...images,
                result.assets[0].uri
            ])
        }
    }

    return (
        <>
            <Pressable
                onPress={handlePickImage}
            >
                {children}
            </Pressable>
        </>
    )
}