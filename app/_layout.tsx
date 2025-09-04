import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";
import './global.css';

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => {
  return (
    <View className="flex-1 items-center justify-center mt-3">
      <Image source={icon} tintColor={focused ? "red" : "black"} className="w-6 h-6" />
      <Text className={`text-[${focused ? "red" : "black"}] text-lg text-center w-full`}>{title}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#fefefe",
        position: "absolute",
        minHeight: 85,
      }
    }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} title="Home" /> }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites", tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.favorites} title="Favorites" /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.profile} title="Profile" /> }} />
    </Tabs>
  )
}

export default TabsLayout;