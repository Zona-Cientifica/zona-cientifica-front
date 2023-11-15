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
        marginTop: '8%',
        alignItems: 'center',
        marginBottom: '15%'
      },
      title: {
        color: "#FFF",
        fontSize: 32,
        fontWeight: "700",
        marginLeft: 32
      }
})

export default styles;