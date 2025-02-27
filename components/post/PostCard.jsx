import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, useColorScheme, View } from "react-native";

export default function PostCard({ dataPost }) {
  const { navigate } = useNavigation();

  const theme = useColorScheme();
  return (
    <Pressable
      onPress={() => {
        navigate("PostDetailsScreen", { dataPost });
      }}
    >
      <View
        style={[
          styles.container,
          { color: theme === "dark" ? "#FFF" : "#000" },
          { backgroundColor: theme === "dark" ? "#333" : "#FFF" },
        ]}
        numberOfLines={1}
      >
        <Text
          style={[styles.title, { color: theme === "dark" ? "#FFF" : "#000" }]}
        >
          {dataPost?.title}
        </Text>
        <Text
          style={[styles.body, { color: theme === "dark" ? "#FFF" : "#000" }]}
        >
          {dataPost?.body}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = {
  container: {
    padding: 10,
    margin: 8,
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
