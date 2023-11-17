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
      },
      boxCategory: {
        marginTop: "10%"
      },
      boxEvents: {
        marginTop: '0%',
        marginBottom: 260,
      },
      events: {
        marginTop: '2%',
        alignItems: 'center',
      },
      title: {
        color: "#FFF",
        fontSize: 32,
        fontWeight: "700",
        marginLeft: 32
      }
})

export default styles;