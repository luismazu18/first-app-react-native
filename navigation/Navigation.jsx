import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutScreen from "./screens/AboutScreen";
import Main from "../components/Main";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        animation: "fade",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Inicio",
          tabBarLabelStyle: { fontSize: 12, color: "black" },
        }}
      />
      <Tab.Screen
        name="Sobre Nosotros"
        component={AboutScreen}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="infocirlceo"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabelStyle: { fontSize: 12, color: "black" },
        }}
      />
    </Tab.Navigator>
  );
}
