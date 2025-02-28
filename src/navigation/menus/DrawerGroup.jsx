import { createDrawerNavigator } from "@react-navigation/drawer";
import StackGroup from "./StackGroup";

const Drawer = createDrawerNavigator();

export default function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="StackGroup" component={StackGroup} />
    </Drawer.Navigator>
  );
}
