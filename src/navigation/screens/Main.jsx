import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { listPost } from "../../constants";
import { PostCard } from "../../components";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.container,
      }}
    >
      <StatusBar style="auto" />
      <FlatList
        data={listPost}
        renderItem={({ item }) => <PostCard dataPost={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
