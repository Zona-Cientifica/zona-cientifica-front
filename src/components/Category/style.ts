import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    categoryCard: {
        width: 308,
        height: 69,
        borderRadius: 11,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignContent: 'center'
    },
    name: {
        color: "#FFF",
        fontSize: 32,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -4, height: 1},
        textShadowRadius: 4
    }
})

export default styles;