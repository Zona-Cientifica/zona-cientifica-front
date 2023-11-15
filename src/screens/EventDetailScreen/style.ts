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
    },
    subtitle: {
        color: "#FFF",
        fontSize: 20,
    },
    info: {
        color: "#FFF",
        fontSize: 18,
        marginBottom: 17
    },
    content: {
        color: "#FFF",
        fontSize: 18,
        margin: 20
    },
    local: {
        flexDirection: 'row'
    },
    eventImage: {
        marginBottom: 17,
        width: 329,
        height: 132,
        borderRadius: 11
    },
})

export default styles;