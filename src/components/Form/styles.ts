import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
      marginBottom: 30,
    },
    container: {
      flex: 1,
      margin: 0,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
    button: {
      width: "50%",
      height: 50,
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "#64CCC5",
      borderWidth: 2,
      borderColor: "black",
      borderStyle: "solid",
      borderRadius: 10
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "700"
    },
    inputContainer:{
      marginTop: "10%",
      marginBottom: "5%"
    },
    header: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "700"
    },
    error: {
      color: "red",
      fontSize: 15,
      fontWeight: "700",
      textAlign: "center"
    }
})

export default styles;