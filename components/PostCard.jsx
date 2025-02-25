import { Text, View } from "react-native";

export default function PostCard({ title, body }) {
  return (
    <View style={styles.container}>
      <Text className="bg-slate-400" style={styles.title}>
        {title}
      </Text>
      <Text style={styles.body}>{body}</Text>
    </View>
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
