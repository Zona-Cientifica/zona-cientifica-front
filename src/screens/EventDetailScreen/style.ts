import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  title: {
    marginTop: "10%",
    marginBottom: 17,
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  boxDescription: {
    marginTop: 18,
    width: "85%",
    alignItems: "center",
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  subtitle: {
    marginTop: 20,
    color: "#FFF",
    fontSize: 25,
    fontWeight: "600",
  },
  info: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 17,
  },
  content: {
    color: "#FFF",
    fontSize: 18
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  eventImage: {
    marginBottom: 17,
    width: 329,
    height: 132,
    borderRadius: 11,
  },
});

export default styles;
