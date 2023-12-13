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
      backgroundColor: "blue"
    },
    buttonText: {
      textAlign: "center"
    }
})

export default styles;