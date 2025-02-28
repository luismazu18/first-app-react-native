import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutScreen, Main } from "../screens";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabGroup() {
  const theme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Sobre Nosotros") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? (theme === "dark" ? "white" : "black") : "grey"}
            />
          );
        },
        headerTitle: "Publicaciones",
        headerTitleAlign: "center",
        headerStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Main} />
      <Tab.Screen name="Sobre Nosotros" component={AboutScreen} />
    </Tab.Navigator>
  );
}
