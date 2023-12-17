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
      clearFilter: {
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#DFF6FF",
        borderRadius: 10,
        backgroundColor: "#065F89",
        width: 150,
        alignSelf: "center",
        paddingTop: 5,
        paddingBottom: 5
      },
      clearFilterText: {
        textAlign: "center",
        fontSize: 16
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