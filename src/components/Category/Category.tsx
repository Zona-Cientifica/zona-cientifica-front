import { View, Text, ImageBackground } from 'react-native';
import styles from './style';

type Category = {
    name: string,
    picture: string
}

type Props = {
    category: Category
}

export default function Category({category}:Props){
    return (
        <>
            <View style={styles.categoryCard}>
                <ImageBackground source={{uri: category.picture}} style={styles.backgroundImage}>
                    <Text style={styles.name}>{category.name}</Text>
                </ImageBackground>
            </View>
        </>
    )
}