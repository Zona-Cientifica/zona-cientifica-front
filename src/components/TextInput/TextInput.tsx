import { TextInput } from "react-native";
import { TextInputProps } from 'react-native';

import styles from "./styles";

type Props = TextInputProps & {
    placeholder?:string,
    value?:string
}

export function InputText({placeholder, value, ...rest}:Props){
    return (
        <>
            <TextInput
                style={styles.input}
                value={value}
                {...rest}
            />
        </>
    )
}