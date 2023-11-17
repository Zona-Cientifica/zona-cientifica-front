import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoryCard: {
    width: 308,
    height: 69,
    borderRadius: 11,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 11,
  },
  name: {
    alignSelf: "center",
    position: "absolute",
    color: "#FFF",
    fontSize: 32,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 1,
    textShadowRadius: 5,
  },
});

export default styles;
