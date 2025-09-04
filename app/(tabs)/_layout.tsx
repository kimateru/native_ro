import { Tabs, Stack } from "expo-router";
import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";


const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => {
  return (
    <View className="flex-1 items-center justify-center mt-2">
      <Image source={icon} tintColor={focused ? "red" : "black"} className="w-6 h-6" />
      <Text className={`text-[${focused ? "red" : "black"}] text-lg text-center w-full`}>{title}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#fefefe",
        position: "absolute",
        minHeight: 95,
        paddingTop: 10,
        paddingBottom: 10, 
      }
    }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} title="Home" /> }} />
      <Tabs.Screen name="add" options={{ title: "Add new product", tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.add} title="Add new product" /> }} />

    </Tabs>
    </>
  )
}

export default TabsLayout;