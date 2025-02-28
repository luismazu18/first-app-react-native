import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View>
      <Text style={styles.text}>About Page</Text>
    </View>
  );
}

const styles = {
  text: {
    color: "#fff",
  },
};
