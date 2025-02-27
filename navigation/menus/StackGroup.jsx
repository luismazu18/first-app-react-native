import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostDetails } from "../screens";
import TabGroup from "./TabGroup";

const Stack = createNativeStackNavigator();

export default function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabGruopMain"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetailsScreen"
        component={PostDetails}
        options={{
          presentation: "modal",
          headerTitle: "Detalles de la Publicación",
        }}
      />
    </Stack.Navigator>
  );
}
