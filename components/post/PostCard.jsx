import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function PostCard({ dataPost }) {
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigate("PostDetailsScreen", { dataPost });
      }}
    >
      <View style={styles.container}>
        <Text className="bg-slate-400" style={styles.title}>
          {dataPost?.title}
        </Text>
        <Text style={styles.body}>{dataPost?.body}</Text>
      </View>
    </Pressable>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
};
