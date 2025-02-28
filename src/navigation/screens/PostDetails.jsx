import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function PostDetails() {
  const {
    params: { dataPost },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dataPost?.body}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#cdcccc",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
};
