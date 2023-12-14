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
      backgroundColor: "green"
    },
    buttonText: {
      textAlign: "center"
    },
    inputContainer:{
      marginTop: "5%"
    },
    header: {
      color: "white",
      fontSize: 20,
      textAlign: "center"
    },
    error: {
      color: "red",
      fontSize: 15,
      textAlign: "center"
    }
})

export default styles;