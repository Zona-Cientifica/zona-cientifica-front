import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center"
    },
    title: {
        marginTop: "10%",
        marginBottom: 17,
        color: "#FFF",
        fontSize: 32,
        fontWeight: "700",
        textAlign: "center"
    }
})

export default styles;