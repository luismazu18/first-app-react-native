import "./global.css";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { useColorScheme } from "react-native";

export default function App() {
  const currentScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Navigation />
    </NavigationContainer>
  );
}
