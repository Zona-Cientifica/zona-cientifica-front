import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0
    },
    sendLogin: {
      marginTop: "100%",
      alignSelf: "center",
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 10
    },
    msg: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 14
    },
    redirectText: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 14
    },
    header: {
      marginTop: "5%",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "700"
    },
    continue: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 26
    },
    button: {
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      borderRadius: 10,
      position: "absolute",
      width: "50%",
      top: "86%",
      left: "25%",
      backgroundColor: "white"
    }
})

export default styles;