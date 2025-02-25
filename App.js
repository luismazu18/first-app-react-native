import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
