import { Tabs } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
const BottomRouter = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home page",
          title: "Home",
          tabBarIcon: () => <FontAwesome size={28} name="home" color="green" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="user/[id]"
        options={{
          headerTitle: "User page",
          title: "User",
          tabBarIcon: () => <AntDesign size={28} name="user" color="green" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="About"
        options={{
          headerTitle: "About pagee",
          title: "About",
          tabBarIcon: () => (
            <AntDesign size={28} name="checkcircle" color="green" />
          ),
        }}
      ></Tabs.Screen>
      
    </Tabs>
  );
};

export default BottomRouter;
