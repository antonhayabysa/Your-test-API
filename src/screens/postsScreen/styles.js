import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  post: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
});

export default styles;
