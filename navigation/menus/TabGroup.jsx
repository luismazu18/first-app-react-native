import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutScreen, Main } from "../screens";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabGroup() {
  const navigate = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Sobre Nosotros") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "black" : "grey"}
            />
          );
        },
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                navigate.openDrawer();
              }}
            >
              <Ionicons
                name="menu"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </Pressable>
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
